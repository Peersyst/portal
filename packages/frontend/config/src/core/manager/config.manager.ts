import { DeepPick, NestedKeys } from "@swisstype/essential";
import { ConfigManagerEventEmitter } from "./events";
import { IConfigProvider, IConfigStorage } from "./interfaces";
import { deepmerge, getAttribute } from "@peersyst/react-utils";
import { BaseConfig } from "./types";
import { IS_PROD } from "@shared/env";

export class ConfigManager<Config extends BaseConfig, ProviderConfig extends Omit<Config, "version"> = Omit<Config, "version">> {
    private logger = console;

    private _config: Config;
    get config(): Config {
        return this._config;
    }
    private set config(config: Config) {
        this._config = config;
    }

    private _initialization: Promise<void>;
    get initialization(): Promise<void> {
        return this._initialization;
    }
    private set initialization(initialization: Promise<void>) {
        this._initialization = initialization;
    }

    // Config is fetched from the provider and stored in the storage
    isLoaded = false;

    // Config is outdated and needs to be updated
    isOutdated = false;

    // Config is ready to be used
    private get isReady(): boolean {
        return this.isLoaded || this.isOutdated;
    }

    private readonly eventEmitter = new ConfigManagerEventEmitter<Config>({ maxListeners: Infinity });

    readonly on: ConfigManagerEventEmitter<Config>["on"] = this.eventEmitter.on.bind(this.eventEmitter);

    readonly once: ConfigManagerEventEmitter<Config>["once"] = this.eventEmitter.once.bind(this.eventEmitter);

    constructor(
        private readonly provider: IConfigProvider<ProviderConfig>,
        private readonly storage: IConfigStorage<ProviderConfig>,
        staticConfig: Config,
    ) {
        this.config = staticConfig;

        this.initialization = this.init();
    }

    private async init(): Promise<void> {
        try {
            await this.load();
        } catch (_) {
            // If load fails, use the available config
            await this.loadFromStorage();
        }
    }

    /**
     * Loads config from the provider and stores it in the storage.
     */
    private async load(): Promise<void> {
        if (IS_PROD) {
            const fetchedConfig = await this.provider.fetchConfig();

            // If this.config major version is smaller than fetchedConfig version throw outdated event
            if (fetchedConfig.minVersion && this.config.version < fetchedConfig.minVersion) {
                this.isOutdated = true;
                this.eventEmitter.emit("outdated", this.config, fetchedConfig);
            } else {
                this.config = deepmerge(this.config, fetchedConfig);
                await this.storage.set(fetchedConfig);
                this.isLoaded = true;
                this.eventEmitter.emit("load", this.config);
            }
        } else {
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    this.isLoaded = true;
                    this.eventEmitter.emit("load", this.config);
                    resolve();
                }, 500);
            });
        }
    }

    /**
     * Loads config from the storage.
     */
    private async loadFromStorage(): Promise<void> {
        const storedConfig = await this.storage.get();

        if (storedConfig) {
            this.config = deepmerge(this.config, storedConfig);
        }

        this.isLoaded = true;
        this.eventEmitter.emit("load", this.config);
    }

    async reload(): Promise<void> {
        await this.initialization;

        if (!this.isReady) {
            await this.load();
        }
    }

    getAll(): Config {
        if (!this.isReady)
            this.logger.warn(
                `Tried to get config before config was loaded. Be aware that accessing config before it is loaded will return the static config. This warning may be thrown when accessing config in an onInit or too early in the app lifecycle.`,
            );
        return this.config;
    }

    async getAllAsync(): Promise<Config> {
        await this.initialization;
        return this.config;
    }

    get<K extends NestedKeys<Config>>(key: K): DeepPick<Config, K> {
        if (!this.isReady)
            this.logger.warn(
                `Tried to get config key "${key}" before config was loaded. Be aware that accessing config before it is loaded will return the static config. This warning may be thrown when accessing config in an onInit or too early in the app lifecycle.`,
            );
        return getAttribute(
            this.config,
            /* FIXME: `getAttribute uses @peersyst/react-types which includes an error in NestedKeys`
             * @see https://github.com/Peersyst/swisstype/commit/aaef17c0f8649d252651200b119256e33ce1085a
             */
            key as any,
        ) as DeepPick<Config, K>;
    }

    async getAsync<K extends NestedKeys<Config>>(key: K): Promise<DeepPick<Config, K>> {
        await this.initialization;
        return this.get(key) as DeepPick<Config, K>;
    }
}

import { EventEmitter } from "@frontend/events";
import { BaseConfig, BaseProviderConfig } from "../types";

export type ConfigManagerEvents<Config extends BaseConfig, ProviderConfig extends BaseProviderConfig = Omit<Config, "version">> = {
    /**
     * Emitted when the config is loaded.
     * @param config The config.
     */
    load: (config: Config) => void;

    /**
     * Emitted when the config is outdated.
     * @param outdatedConfig The outdated config.
     * @param providerConfig The provider config.
     */
    outdated: (outdatedConfig: Config, providerConfig: ProviderConfig) => void;
};

export class ConfigManagerEventEmitter<Config extends BaseConfig> extends EventEmitter<ConfigManagerEvents<Config>> {}

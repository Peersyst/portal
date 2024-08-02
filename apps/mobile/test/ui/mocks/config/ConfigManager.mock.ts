import { getAttribute } from "@peersyst/react-utils";
import { DeepPick, NestedKeys } from "@swisstype/essential";
import { EventEmitter } from "@peersyst/events";
import { Config, IConfigManager, IConfigManagerEvents } from "@peersyst/config";
import config from "@/common/config/static";

export class ConfigManagerMock implements IConfigManager {
    config = config;
    initialization = Promise.resolve();
    isLoaded = true;
    isOutdated = false;

    on: EventEmitter<IConfigManagerEvents>["on"] = jest.fn(() => jest.fn());
    once: EventEmitter<IConfigManagerEvents>["once"] = jest.fn(() => jest.fn());

    reload(): Promise<void> {
        return Promise.resolve();
    }

    getAll(): Config {
        return config;
    }

    getAllAsync(): Promise<Config> {
        return Promise.resolve(config);
    }

    get<K extends NestedKeys<Config>>(key: K): DeepPick<Config, K> {
        return getAttribute(config, key) as DeepPick<Config, K>;
    }

    getAsync<K extends NestedKeys<Config>>(key: K): Promise<DeepPick<Config, K>> {
        return Promise.resolve(getAttribute(config, key) as DeepPick<Config, K>);
    }
}

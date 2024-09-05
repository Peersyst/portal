import { getAttribute } from "@peersyst/react-utils";
import { EventEmitter } from "@frontend/events";
import { NestedKeys, DeepPick } from "@swisstype/essential";
import { Config, config, IConfigManager, IConfigManagerEvents } from "../../src";

export class ConfigManagerMock implements IConfigManager {
    config = config;
    initialization = Promise.resolve();
    isLoaded = true;
    isOutdated = false;

    on: EventEmitter<IConfigManagerEvents>["on"] = jest.fn(() => jest.fn());
    once: EventEmitter<IConfigManagerEvents>["once"] = jest.fn(() => jest.fn());

    reload = jest.fn((): Promise<void> => Promise.resolve());

    getAll = jest.fn((): Config => config);

    getAllAsync = jest.fn((): Promise<Config> => Promise.resolve(config));

    get = jest.fn(<K extends NestedKeys<Config>>(key: K): DeepPick<Config, K> => getAttribute(config, key) as DeepPick<Config, K>);

    getAsync = jest.fn(
        <K extends NestedKeys<Config>>(key: K): Promise<DeepPick<Config, K>> =>
            Promise.resolve(getAttribute(config, key) as DeepPick<Config, K>),
    );
}

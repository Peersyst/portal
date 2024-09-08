import { EventEmitter } from "@frontend/events";
import { Config } from "../types";
import { IConfigManagerEvents } from "./i-config.manager.events";
import { DeepPick, NestedKeys } from "@swisstype/essential";

export interface IConfigManager {
    /**
     * The config.
     */
    config: Config;

    /**
     * The initialization promise.
     */
    initialization: Promise<void>;

    /**
     * Whether the config is fetched from the provider and stored in the storage.
     */
    isLoaded: boolean;

    /**
     * Whether the config is outdated and needs to be update.
     */
    isOutdated: boolean;

    /**
     * Adds an event listener.
     * @param event The event.
     * @param listener The listener.
     */
    on: EventEmitter<IConfigManagerEvents>["on"];

    /**
     * Adds an event listener that is only called once.
     * @param event The event.
     * @param listener The listener.
     */
    once: EventEmitter<IConfigManagerEvents>["once"];

    /**
     * Reloads the config.
     */
    reload(): Promise<void>;

    /**
     * Gets all the config.
     */
    getAll(): Config;

    /**
     * Gets all the config asynchronously.
     */
    getAllAsync(): Promise<Config>;

    /**
     * Gets a value from the config.
     * @param key The key.
     */
    get<K extends NestedKeys<Config>>(key: K): DeepPick<Config, K>;

    /**
     * Gets a value from the config asynchronously.
     * @param key The key.
     */
    getAsync<K extends NestedKeys<Config>>(key: K): Promise<DeepPick<Config, K>>;
}

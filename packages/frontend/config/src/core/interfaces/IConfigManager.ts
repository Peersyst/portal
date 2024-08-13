import { EventEmitter } from "@frontend/events";
import { Config } from "../types";
import { IConfigManagerEvents } from "./IConfigManagerEvents";
import { DeepPick, NestedKeys } from "@swisstype/essential";

export interface IConfigManager {
    config: Config;
    initialization: Promise<void>;
    isLoaded: boolean;
    isOutdated: boolean;
    on: EventEmitter<IConfigManagerEvents>["on"];
    once: EventEmitter<IConfigManagerEvents>["once"];
    reload(): Promise<void>;
    getAll(): Config;
    getAllAsync(): Promise<Config>;
    get<K extends NestedKeys<Config>>(key: K): DeepPick<Config, K>;
    getAsync<K extends NestedKeys<Config>>(key: K): Promise<DeepPick<Config, K>>;
}

import { Config, CoreConfig } from "../types";
import { config as coreConfig } from "../config";
import { Demand, LoosenDeeply } from "@swisstype/essential";
import { deepmerge } from "@peersyst/react-utils";

export function createConfig(config: Demand<LoosenDeeply<Config, keyof CoreConfig>, "projectName">): Config {
    return deepmerge(coreConfig, config);
}

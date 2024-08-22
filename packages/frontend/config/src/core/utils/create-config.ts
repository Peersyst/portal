import { Config, CoreConfig } from "../types";
import { config as coreConfig } from "../config";
import { LoosenDeeply } from "@swisstype/essential";
import { deepmerge } from "@peersyst/react-utils";

export function createConfig(config: LoosenDeeply<Config, keyof CoreConfig>): Config {
    return deepmerge(coreConfig, config);
}

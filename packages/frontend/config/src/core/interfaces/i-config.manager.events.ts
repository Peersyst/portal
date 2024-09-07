import { Config } from "../types";

export type IConfigManagerEvents = {
    /**
     * Emitted when the config is loaded.
     * @param config The config.
     */
    load: (config: Config) => void;

    /**
     * Emitted when the config is outdated.
     * @param outdatedConfig The outdated config.
     * @param config The current config.
     */
    outdated: (outdatedConfig: Config, config: Config) => void;
};

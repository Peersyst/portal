import { Config } from "../types";

export type IConfigManagerEvents = {
    load: (config: Config) => void;
    outdated: (outdatedConfig: Config, config: Config) => void;
};

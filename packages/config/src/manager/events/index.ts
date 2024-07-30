import { EventEmitter } from "@base-project/events";
import { BaseConfig, BaseProviderConfig } from "../types";

export type ConfigManagerEvents<Config extends BaseConfig, ProviderConfig extends BaseProviderConfig = Omit<Config, "version">> = {
    load: (config: Config) => void;
    outdated: (outdatedConfig: Config, providerConfig: ProviderConfig) => void;
};

export class ConfigManagerEventEmitter<Config extends BaseConfig> extends EventEmitter<ConfigManagerEvents<Config>> {}

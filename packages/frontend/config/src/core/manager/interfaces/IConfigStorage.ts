import { BaseProviderConfig } from "../types";

export interface IConfigStorage<Config extends BaseProviderConfig> {
    set(config: Config): Promise<void>;
    get(): Promise<Config | undefined>;
    clear(): Promise<void>;
}

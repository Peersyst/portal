import { BaseProviderConfig } from "../types";

export interface IConfigProvider<Config extends BaseProviderConfig> {
    fetchConfig(): Promise<Config>;
}

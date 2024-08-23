import { ThemeKey } from "@frontend/design-system-core/themes";
import { BaseConfig } from "./manager";

export interface CoreConfig extends BaseConfig {
    projectName: string;
    publicUrl: string;
    backendUrl: string;
    theme: ThemeKey;
}
export interface Config extends CoreConfig {}

export type StaticConfig = Omit<Config, "minVersion">;

export type ProviderConfig = Omit<Config, "version">;

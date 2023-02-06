import "@peersyst/react-components";
import { Config, CreateConfig } from "@peersyst/react-components";
import { TFunction } from "react-i18next";
import { Config as GlobalConfig } from "config";

type UIConfig = Config & GlobalConfig;
type CreateUIConfig = CreateConfig & GlobalConfig;

declare module "@peersyst/react-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"translation">;
    }

    export interface Config extends UIConfig {}

    export interface CreateConfig extends CreateUIConfig {}
}

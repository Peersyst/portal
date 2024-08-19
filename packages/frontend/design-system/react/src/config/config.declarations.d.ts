import {} from "@peersyst/react-components";
import { TFunction } from "react-i18next";
import { Theme as ThemeModel } from "@cbdc-wallet/common";

declare module "@peersyst/react-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"translation">;
    }

    export interface Theme extends ThemeModel {}
}

import "@peersyst/react-native-components";
import { TFunction } from "react-i18next";
import { Theme as ThemeModel } from "@peersyst/common";

declare module "@peersyst/react-native-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"translation">;
    }

    export interface Theme extends ThemeModel {}

    export interface ExtraValidators {
        xrplAddress: Validator<boolean>;
    }
}

import "@peersyst/react-native-components";
import { TFunction } from "i18next";

declare module "@peersyst/react-native-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"translation">;
    }
}

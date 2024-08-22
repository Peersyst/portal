import {} from "@peersyst/react-components";
import { TFunction } from "i18next";

declare module "@peersyst/react-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"translation">;
    }
}

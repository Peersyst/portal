import { CreateConfig } from "@peersyst/react-components";
import { TFunction } from "i18next";
import { ThemeConfig } from "@frontend/design-system-core/themes";

declare module "@peersyst/react-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"error">;
    }
}

/**
 * The available options for the design system configuration.
 * It is important to notice that only the theme configuration can be dynamic, the rest of the configuration must be static.
 */
export type DSConfigOptions = Omit<CreateConfig, "theme" | "themes" | "translate" | "locale"> & ThemeConfig;

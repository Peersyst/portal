import type {} from "react";
import type {} from "@peersyst/react-components";
import type { ThemeSpacing } from "./spacing";
import type { SpecificPalette } from "./palette/types";
import { GeneralPalette } from "@frontend/design-system-core/palette";
import { MergedTypographyVariantsOverrides } from "./typography/typography.types";

// Custom components theme
declare module "@peersyst/react-components" {
    export interface ThemePalette extends GeneralPalette, SpecificPalette {}

    export interface TypographyVariantsOverrides extends MergedTypographyVariantsOverrides {}

    export interface CreateTheme {
        spacing: ThemeSpacing;
        borderRadiusXxs: string;
        borderRadiusXs: string;
        borderRadiusSm: string;
        borderRadiusLg: string;
        borderRadiusMax: string;
    }

    export interface Theme {
        spacing: ThemeSpacing;
        borderRadiusXxs: string;
        borderRadiusXs: string;
        borderRadiusSm: string;
        borderRadiusLg: string;
        borderRadiusMax: string;
    }
}

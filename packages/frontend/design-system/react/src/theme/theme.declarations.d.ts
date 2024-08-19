import type {} from "react";
import type { CSSProp } from "styled-components";
import type {} from "@peersyst/react-components";
import type { Theme } from "@peersyst/react-components";
import type { ThemeSpacing } from "./common/spacing";
import type { TypographyVariantsOverrides as ProjectTypographyVariantsOverrides } from "./common/typography";
import type { GeneralPalette, SpecificPalette } from "./common/palette/types";

// Custom components theme
declare module "@peersyst/react-components" {
    export interface ThemePalette extends GeneralPalette, SpecificPalette {}

    export interface TypographyVariantsOverrides extends ProjectTypographyVariantsOverrides {}

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

// Type styled components theme with our components theme
declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}

// Use css prop in components
declare module "react" {
    export interface Attributes {
        css?: CSSProp<Theme>;
    }
}

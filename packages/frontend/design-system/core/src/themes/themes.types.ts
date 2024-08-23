import { CreateTheme } from "@peersyst/react-components-core";
import { Themes as ThemeModes } from "@peersyst/react-components-core";

export type ThemeKey = "default";

export type Themes = Record<ThemeKey, { light: CreateTheme; dark: CreateTheme }>;

export type ThemeConfig = {
    themeKey?: ThemeKey;
    themeMode?: keyof ThemeModes;
};

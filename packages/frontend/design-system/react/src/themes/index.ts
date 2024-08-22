import { CreateTheme } from "@peersyst/react-components";
import { defaultLightTheme, defaultDarkTheme } from "./default";

export const themes: Record<string, { light: CreateTheme; dark: CreateTheme }> = {
    default: {
        light: defaultLightTheme,
        dark: defaultDarkTheme,
    },
};

import { CreateTheme } from "@peersyst/react-components";
import { lightTheme, darkTheme } from "./default";

export const themes: Record<string, { light: CreateTheme; dark: CreateTheme }> = {
    default: {
        light: lightTheme,
        dark: darkTheme,
    },
};

import { CreateTheme } from "@peersyst/react-components";
import { theme } from "./default";

export const themes: Record<string, { light: CreateTheme; dark: CreateTheme }> = {
    default: {
        light: theme,
        dark: theme,
    },
};

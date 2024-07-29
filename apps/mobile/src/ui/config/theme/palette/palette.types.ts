import { ThemePalette } from "@peersyst/react-native-components";

export type BasePalette = Omit<ThemePalette, "mode" | "text" | "backdrop" | "disabled" | "background">;

export type LightPalette = Omit<ThemePalette, "mode"> & {
    mode: "light";
};

export type DarkPalette = Omit<ThemePalette, "mode"> & {
    mode: "dark";
};

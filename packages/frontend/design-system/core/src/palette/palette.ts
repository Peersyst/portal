import { ThemePalette } from "@peersyst/react-components-core";
import { BlueShades, ErrorShades, GrayShades, GreenShades, MagentaShades, OrangeShades, PurpleShades } from "./shades";

export interface GeneralPalette extends Pick<ThemePalette, "primary"> {
    accent: string;
    white: string;
    black: string;
    purple: PurpleShades;
    blue: BlueShades;
    green: GreenShades;
    magenta: MagentaShades;
    orange: OrangeShades;
    grey: GrayShades;
    error: ErrorShades;
    placeholder: string;
}

export type BasePalette = GeneralPalette;

export type LightPalette = Omit<ThemePalette, "mode"> & {
    mode: "light";
};

export type DarkPalette = Omit<ThemePalette, "mode"> & {
    mode: "dark";
};

export type BaseThemePalette<T extends ThemePalette> = GeneralPalette &
    Pick<ThemePalette, "text" | "background" | "backdrop" | "disabled" | "status"> &
    Pick<T, "mode">;

export type BaseLightPalette = BaseThemePalette<LightPalette>;

export type BaseDarkPalette = BaseThemePalette<DarkPalette>;

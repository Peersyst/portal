import { ThemePalette } from "@peersyst/react-components-core";
import { BlueShades, GrayShades, GreenShades, OrangeShades, RedShades, YellowShades } from "./shades";

export interface GeneralPalette extends Pick<ThemePalette, "primary"> {
    blue: BlueShades;
    green: GreenShades;
    orange: OrangeShades;
    red: RedShades;
    gray: GrayShades;
    yellow: YellowShades;
    contrast: string;
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

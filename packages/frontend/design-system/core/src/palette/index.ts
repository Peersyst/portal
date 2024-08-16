import { ThemePalette } from "@peersyst/react-components";

export interface GrayShades {
    light: string;
    superSoft: string;
    silver: string;
    soft: string;
    regular: string;
    lowMedium: string;
    medium: string;
    dark: string;
    highDark: string;
    almostBlack: string;
    black: string;
    darkBlack: string;
}

export interface BlueShades {
    electric: string;
    royal: string;
    sky: string;
}

export interface GreenShades {
    electric: string;
    olive: string;
}

export interface OrangeShades {
    pumpkin: string;
}

export interface RedShades {
    scarlet: string;
}

export interface YellowShades {
    gold: string;
}

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

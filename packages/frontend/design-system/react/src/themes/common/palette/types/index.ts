import { ThemePalette } from "@peersyst/react-components";
import { GeneralPalette } from "@frontend/design-system-core/palette";
import { ButtonPalette } from "./button";

export interface SpecificPalette extends Pick<ThemePalette, "text" | "background" | "backdrop" | "disabled" | "status"> {
    button: ButtonPalette;
}

export type BasePalette = GeneralPalette;

export type LightPalette = Omit<ThemePalette, "mode"> & {
    mode: "light";
};

export type BaseThemePalette<T extends ThemePalette> = GeneralPalette &
    Pick<ThemePalette, "text" | "background" | "backdrop" | "disabled" | "status"> &
    Pick<T, "mode">;

export type BaseLightPalette = BaseThemePalette<LightPalette>;

import { ThemePalette } from "@peersyst/react-components";
import { ButtonPalette } from "./button";

export interface SpecificPalette extends Pick<ThemePalette, "text" | "background" | "backdrop" | "disabled" | "status"> {
    button: ButtonPalette;
}

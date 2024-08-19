import { DarkPalette } from "@frontend/design-system-core/palette";
import { baseDarkPalette } from "./base";
import { darkButtonPalette } from "../components/button";

export const darkPalette: DarkPalette = {
    ...baseDarkPalette,
    button: darkButtonPalette,
};

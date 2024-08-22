import { DarkPalette } from "@frontend/design-system-core/palette";
import { darkButtonPalette } from "../components/button";
import { baseDefaultDarkPalette } from "@frontend/design-system-core/themes/default";

export const deafultDarkPalette: DarkPalette = {
    ...baseDefaultDarkPalette,
    button: darkButtonPalette,
};

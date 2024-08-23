import { baseDefaultLightPalette } from "@frontend/design-system-core/themes/default";
import { lightButtonPalette } from "../components/button";
import { LightPalette } from "@frontend/design-system-core/palette";

export const defaultLightPalette: LightPalette = {
    ...baseDefaultLightPalette,
    button: lightButtonPalette,
};

import { baseDefaultLightPalette } from "@frontend/design-system-core/themes/default";
import { LightPalette } from "../../../common/palette/types";
import { lightButtonPalette } from "../components/button";

export const defaultLightPalette: LightPalette = {
    ...baseDefaultLightPalette,
    button: lightButtonPalette,
};

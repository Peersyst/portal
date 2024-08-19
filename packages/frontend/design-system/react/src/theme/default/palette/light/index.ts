import { LightPalette } from "../../../common/palette/types";
import { lightButtonPalette } from "../components/button";
import { baseLightPalette } from "./base";

export const lightPalette: LightPalette = {
    ...baseLightPalette,
    button: lightButtonPalette,
};

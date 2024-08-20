import { BaseLightPalette } from "../../../palette";
import { baseDefaultPalette } from "../base";
import { alpha } from "@peersyst/react-utils";

export const baseDefaultLightPalette: BaseLightPalette = {
    ...baseDefaultPalette,
    mode: "light",
    text: baseDefaultPalette.gray.highDark,
    background: baseDefaultPalette.gray.light,
    backdrop: alpha(baseDefaultPalette.gray.darkBlack, 0.1),
    disabled: baseDefaultPalette.gray.lowMedium,
    status: {
        info: baseDefaultPalette.gray.black,
        error: baseDefaultPalette.red.scarlet,
        warning: baseDefaultPalette.orange.pumpkin,
        success: baseDefaultPalette.green.electric,
    },
};

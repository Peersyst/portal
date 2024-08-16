import { BaseLightPalette } from "../../palette";
import { basePalette } from "../base";
import { alpha } from "@peersyst/react-utils";

export const baseLightPalette: BaseLightPalette = {
    ...basePalette,
    mode: "light",
    text: basePalette.gray.highDark,
    background: basePalette.gray.light,
    backdrop: alpha(basePalette.gray.darkBlack, 0.1),
    disabled: basePalette.gray.lowMedium,
    status: {
        info: basePalette.gray.black,
        error: basePalette.red.scarlet,
        warning: basePalette.orange.pumpkin,
        success: basePalette.green.electric,
    },
};

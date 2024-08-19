import { BaseLightPalette } from "@frontend/design-system-core/palette";
import { alpha } from "@peersyst/react-utils";
import { basePalette } from "../base";

export const baseLightPalette: BaseLightPalette = {
    ...basePalette,
    mode: "light",
    text: basePalette.gray.black,
    background: basePalette.gray.light,
    backdrop: alpha(basePalette.gray.black, 0.1),
    disabled: basePalette.gray.light,
    status: {
        info: basePalette.blue.sky,
        error: basePalette.red.scarlet,
        warning: basePalette.orange.pumpkin,
        success: basePalette.green.electric,
    },
};

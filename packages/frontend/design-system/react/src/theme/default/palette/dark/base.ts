import { BaseDarkPalette } from "@frontend/design-system-core/palette";
import { alpha } from "@peersyst/react-utils";
import { basePalette } from "../base";

export const baseDarkPalette: BaseDarkPalette = {
    ...basePalette,
    mode: "dark",
    text: basePalette.gray.light,
    background: basePalette.gray.darkBlack,
    backdrop: alpha(basePalette.gray.light, 0.1),
    disabled: basePalette.gray.highDark,
    status: {
        info: basePalette.gray.black,
        error: basePalette.red.scarlet,
        warning: basePalette.orange.pumpkin,
        success: basePalette.green.electric,
    },
};

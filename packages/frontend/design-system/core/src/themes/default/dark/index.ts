import { alpha } from "@peersyst/react-utils";
import { BaseDarkPalette } from "../../../palette";
import { baseDefaultPalette } from "../base";

export const baseDefaultDarkPalette: BaseDarkPalette = {
    ...baseDefaultPalette,
    mode: "dark",
    text: baseDefaultPalette.gray.light,
    background: baseDefaultPalette.gray.darkBlack,
    backdrop: alpha(baseDefaultPalette.gray.light, 0.1),
    disabled: baseDefaultPalette.gray.highDark,
    status: {
        info: baseDefaultPalette.gray.black,
        error: baseDefaultPalette.red.scarlet,
        warning: baseDefaultPalette.orange.pumpkin,
        success: baseDefaultPalette.green.electric,
    },
};

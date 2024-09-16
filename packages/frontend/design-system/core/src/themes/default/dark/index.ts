import { alpha } from "@peersyst/react-utils";
import { BaseDarkPalette } from "../../../palette";
import { baseDefaultPalette } from "../base";

export const baseDefaultDarkPalette: BaseDarkPalette = {
    ...baseDefaultPalette,
    mode: "dark",
    text: baseDefaultPalette.white,
    background: baseDefaultPalette.grey["950"],
    backdrop: alpha(baseDefaultPalette.black, 0.5),
    disabled: baseDefaultPalette.grey["500"],
    status: {
        info: baseDefaultPalette.blue["40"],
        error: baseDefaultPalette.error["200"],
        warning: baseDefaultPalette.orange["20"],
        success: baseDefaultPalette.green["40"],
    },
};

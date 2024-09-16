import { CreateTheme } from "@peersyst/react-components";
import { spacingProxy as spacing } from "./spacing";
import { typography } from "./typography";

export const baseTheme: CreateTheme = {
    typography,
    spacing,
    borderRadiusXxs: "1px",
    borderRadiusXs: "2px",
    borderRadiusSm: "4px",
    borderRadius: "8px",
    borderRadiusLg: "16px",
    borderRadiusMax: "999px",
    fromControl: {
        horizontalPadding: "0.75rem",
        inputHeight: "2.5rem",
    },
};

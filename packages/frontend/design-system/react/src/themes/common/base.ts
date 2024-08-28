import { CreateTheme } from "@peersyst/react-components";
import { spacingProxy as spacing } from "./spacing";
import { typography } from "./typography";

export const baseTheme: CreateTheme = {
    typography,
    spacing,
    borderRadiusXxs: "4px",
    borderRadiusXs: "8px",
    borderRadiusSm: "10px",
    borderRadius: "12px",
    borderRadiusLg: "20px",
    borderRadiusMax: "999px",
};

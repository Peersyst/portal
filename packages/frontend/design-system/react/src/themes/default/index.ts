import { CreateTheme } from "@peersyst/react-components";
import { baseTheme } from "../common/base";
import { defaultDarkPalette } from "./palette/dark";

export const defaultDarkTheme: CreateTheme = { ...baseTheme, palette: defaultDarkPalette };

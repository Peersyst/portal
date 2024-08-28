import { CreateTheme } from "@peersyst/react-components";
import { baseTheme } from "../common/base";
import { defaultLightPalette } from "./palette/light";
import { defaultDarkPalette } from "./palette/dark";

export const defaultLightTheme: CreateTheme = { ...baseTheme, palette: defaultLightPalette };

export const defaultDarkTheme: CreateTheme = { ...baseTheme, palette: defaultDarkPalette };

import { CreateTheme } from "@peersyst/react-components";
import { baseTheme } from "../common";
import { lightPalette } from "./palette/light";
import { darkPalette } from "./palette/dark";

export const lightTheme: CreateTheme = { ...baseTheme, palette: lightPalette };

export const darkTheme: CreateTheme = { ...baseTheme, palette: darkPalette };

import { CreateTheme } from "@peersyst/react-components";
import { baseTheme } from "../common";
import { lightPalette } from "./palette/light";

export const theme: CreateTheme = { ...baseTheme, palette: lightPalette };

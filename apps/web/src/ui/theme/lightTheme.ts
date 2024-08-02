import { createTheme } from "@peersyst/react-components";
import baseTheme from "./baseTheme";
import { lightPalette } from "./palette/lightPalette";

const lightTheme = createTheme({ ...baseTheme, palette: lightPalette });

export default lightTheme;

import { createTheme } from "@peersyst/react-components";
import baseTheme from "./base.theme";
import { lightPalette } from "./palette/light.palette";

const lightTheme = createTheme({ ...baseTheme, palette: lightPalette });

export default lightTheme;

import { createTheme } from "@peersyst/react-components";
import baseTheme from "./base.theme";
import { darkPalette } from "./palette/dark.palette";

const darkTheme = createTheme({ ...baseTheme, palette: darkPalette });

export default darkTheme;

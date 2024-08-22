import { createTheme } from "@peersyst/react-native-components";
import { baseTheme } from "./base.theme";
import { darkPalette } from "./palette/dark.palette";

const darkTheme = createTheme({ ...baseTheme, palette: darkPalette });

export default darkTheme;

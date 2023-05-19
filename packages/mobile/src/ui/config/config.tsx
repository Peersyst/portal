import { createConfig } from "@peersyst/react-native-components";
import darkTheme from "./theme/darkTheme";
import lightTheme from "./theme/lightTheme";
import { config } from "common/config";

const uiConfig = createConfig({
    ...config,
    themes: {
        default: lightTheme,
        light: lightTheme,
        dark: darkTheme,
    },
});

export default uiConfig;

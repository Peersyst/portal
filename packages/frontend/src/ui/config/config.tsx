import { createConfig, lightTheme } from "@peersyst/react-components";
import darkTheme from "./theme/darkTheme";
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

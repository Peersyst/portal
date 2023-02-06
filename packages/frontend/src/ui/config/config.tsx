import { createConfig } from "@peersyst/react-components";
import theme from "./theme/theme";
import darkTheme from "./theme/darkTheme";
import { config } from "config";

const uiConfig = createConfig({
    ...config,
    themes: {
        default: theme,
        light: theme,
        dark: darkTheme,
    },
});

export default uiConfig;

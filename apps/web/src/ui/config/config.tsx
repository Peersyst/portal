import { createConfig } from "@peersyst/react-components";
import darkTheme from "./theme/darkTheme";
import lightTheme from "./theme/lightTheme";

const uiConfig = createConfig({
  projectName: "cbdc-wallet",
  themes: {
    default: lightTheme,
    light: lightTheme,
    dark: darkTheme,
  },
});

export default uiConfig;

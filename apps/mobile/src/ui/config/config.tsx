import { createConfig } from "@peersyst/react-native-components";
import darkTheme from "./theme/darkTheme";
import lightTheme from "./theme/lightTheme";
import { config } from "common/config";

const uiConfig = createConfig({
    projectName: config.projectName,
    themes: {
        default: lightTheme,
        light: lightTheme,
        dark: darkTheme,
    },
});

export default uiConfig;

- apps

- packages
  - frontend
    - design-system
        - core
        - react // @design-system/react
        - react-native // @design-system/react-native
    - auth
      - domain // @frontend/auth-domain
      - containers // @frontend/auth-containers
        - core
        - react // @frontend/auth-containers-react
        - react-native // @frontend/auth-containers-react-native
      - data-access //@frontend/auth-data-access
        - core
        - browser
        - react-native
  - backend
    - user
      + entity
    - database
      - admin
        + migrations
        + seeders
      - api
        + migrations
        + seeders
      - utils
  - shared
    - utils
    - lint
      
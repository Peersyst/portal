import { CreateConfig, createConfig } from "@peersyst/react-components";
import theme from "./theme/theme";
import darkTheme from "./theme/darkTheme";
import prodConfig from "./config.prod.json";
import devConfig from "./config.dev.json";
import previewConfig from "./config.preview.json";
import stagingConfig from "./config.staging.json";

const envConfigs: Record<string, CreateConfig> = {
    test: devConfig,
    development: devConfig,
    preview: previewConfig,
    production: prodConfig,
    staging: stagingConfig,
};

const envKey = process.env.REACT_APP_CONFIG_ENV || process.env.NODE_ENV;

if (!(envKey in envConfigs)) throw new Error(`${envKey} is not a valid env config`);

const envConfig = envConfigs[envKey];

const config = createConfig({
    ...envConfig,
    themes: {
        default: theme,
        light: theme,
        dark: darkTheme,
    },
});

export default config;

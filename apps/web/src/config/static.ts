import { createConfig } from "@frontend/config";

/**
 * Static config which is the base of the config.
 * It can be overridden by the ConfigManager.
 */
const config = createConfig({
    projectName: "web",
});

export default config;

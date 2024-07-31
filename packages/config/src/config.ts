import { CoreConfig } from "./types";

/**
 * Static config which is the base of the config.
 * It can be overridden by the ConfigManager.
 */
const config: CoreConfig = {
    version: 0,
    projectName: "peersyst",
    publicUrl: "/",
    backendUrl: "http://localhost:3001",
};

export default config;

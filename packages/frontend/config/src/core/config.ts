import { CoreConfig } from "./types";

/**
 * Static config which is the base of the config.
 * It can be overridden by the ConfigManager.
 */
export const config: CoreConfig = {
    version: 0,
    projectName: "",
    publicUrl: "/",
    backendUrl: "http://localhost:3001",
    theme: "default",
};

import { buildConfig } from "@peersyst/env-config";

interface LoggerConfig {
    logLevel: "error" | "info" | "verbose" | "debug";
    logFile: string;
}

export default (): LoggerConfig => {
    return buildConfig<LoggerConfig>({
        logLevel: {
            default: "info",
            development: "debug",
        },
        logFile: "app.log",
    });
};

import commonConfig from "../../jest.config.common.js";

export default {
    ...commonConfig,
    rootDir: "../",
    displayName: {
        name: "DATA ACCESS",
        color: "magenta",
    },
    setupFilesAfterEnv: ["./setup.ts"],
    testRegex: ".*\\.spec\\.ts$",
    testPathIgnorePatterns: ["ui/", "domain/"],
};

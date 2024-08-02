import commonConfig from "../../jest.config.common.js";

export default {
    ...commonConfig,
    rootDir: "../",
    displayName: {
        name: "UI",
        color: "yellowBright",
    },
    setupFilesAfterEnv: ["./setup.ts", "./ui/setup.tsx"],
    testRegex: ".*\\.spec\\.(ts|tsx)$",
    testPathIgnorePatterns: ["domain/", "data-access/"],
};

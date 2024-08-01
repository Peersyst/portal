/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require("../../jest.config.common.js");

module.exports = {
    ...commonConfig,
    rootDir: "../",
    displayName: {
        name: "UI",
        color: "yellowBright",
    },
    setupFilesAfterEnv: ["./ui/setup.tsx"],
    testRegex: ".*\\.spec\\.(ts|tsx)$",
    testPathIgnorePatterns: ["@/domain/", "@/data-access/"],
};

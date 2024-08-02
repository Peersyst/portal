/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require("../../jest.config.common.js");

module.exports = {
    ...commonConfig,
    rootDir: "../../",
    displayName: {
        name: "UI",
        color: "yellowBright",
    },
    setupFilesAfterEnv: ["./test/setup.ts", "./test/ui/setup.tsx"],
    testRegex: ".*\\.spec\\.(ts|tsx)$",
    testPathIgnorePatterns: ["test/domain/", "test/data-access/"],
};

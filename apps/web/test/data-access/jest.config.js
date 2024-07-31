/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require("../../jest.config.common.js");

module.exports = {
    ...commonConfig,
    rootDir: "../../",
    displayName: {
        name: "DATA ACCESS",
        color: "magenta",
    },
    setupFilesAfterEnv: ["./test/setup.ts"],
    testRegex: ".*\\.spec\\.ts$",
    testPathIgnorePatterns: ["test/ui/", "test/domain/"],
};

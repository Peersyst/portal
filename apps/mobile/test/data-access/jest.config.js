/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require("../../jest.config.common.js");

module.exports = {
    ...commonConfig,
    rootDir: "../",
    displayName: {
        name: "DATA ACCESS",
        color: "magenta",
    },
    testRegex: ".*\\.spec\\.ts$",
    testPathIgnorePatterns: ["ui/", "domain/"],
};

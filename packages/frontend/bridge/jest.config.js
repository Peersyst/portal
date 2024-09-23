module.exports = {
    testEnvironment: "node",
    moduleFileExtensions: ["js", "ts"],
    rootDir: ".",
    testRegex: ".*\\.spec\\.ts$",
    setupFilesAfterEnv: ["./test/setup.ts"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    collectCoverageFrom: ["./src/**/*.ts"],
    coverageThreshold: {
        global: {
            branches: 0,
            statements: 0,
        },
    },
};

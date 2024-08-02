module.exports = {
    preset: "ts-jest",
    moduleDirectories: ["src", "node_modules"],
    transform: {
        "\\.[jt]sx?$": "ts-jest",
        "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
    },
    transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
    collectCoverageFrom: [
        "src/**/*.(ts|js|tsx|jsx)",
        "!src/adapter/**/*",
        "!src/controller/**/*",
        "!src/decorators/**/*",
        "!src/interfaces/**/*",
        "!src/**/state/*",
        "!src/modules/**/state/**/*",
        "!src/modules/**/error/**/*",
        "!src/modules/error/**/*",
    ],
    rootDir: ".",
    displayName: {
        name: "DOMAIN",
        color: "blue",
    },
    setupFilesAfterEnv: ["./test/setup.ts"],
    testRegex: ".*\\.spec\\.ts$",
};

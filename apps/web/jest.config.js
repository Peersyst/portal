export default {
    testEnvironment: "jsdom",
    moduleDirectories: ["src", "node_modules"],
    transform: {
        "\\.[jt]sx?$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
        "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
    },
    globals: {
        "ts-jest": {
            tsConfig: "./test/tsconfig.json",
        },
    },
    transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/file.mock.js",
        "\\.svg$": "<rootDir>/mocks/svg.mock.js",
        "\\.(css|less|sass)$": "identity-obj-proxy",
    },
    extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
    setupFilesAfterEnv: ["./test/setup.tsx"],
    collectCoverageFrom: [
        "src/**/*.(ts|js|tsx|jsx)",
        "!src/Providers.tsx",
        "!src/main.tsx",
        "!src/App.tsx",
        "!src/assets/**/*",
        "!src/core/**/*",
        "!src/locale/**/*",
        "!src/router/**/*",
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            statements: 0,
        },
    },
};

module.exports = {
    preset: "jest-expo",
    globals: {
        "ts-jest": {
            tsConfig: "./test/tsconfig.json",
        },
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    moduleDirectories: ["src", "node_modules"],
    setupFilesAfterEnv: ["./test/setup.tsx"],
    transformIgnorePatterns: [
        "../../node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@peersyst)",
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/mocks/file.mock.js",
    },
    collectCoverageFrom: [
        "src/**/*.(ts|js|tsx|jsx)",
        "!src/Providers.tsx",
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

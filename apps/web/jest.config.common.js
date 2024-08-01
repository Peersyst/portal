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
    transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/file.mock.js",
        "\\.svg$": "<rootDir>/mocks/svg.mock.js",
        "\\.(css|less|sass)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/../src/$1",
    },
    extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
};

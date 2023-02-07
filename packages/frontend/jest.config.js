module.exports = {
    projects: ["<rootDir>/test/*/jest.config.js"],
    collectCoverageFrom: ["./**/*.(ts|js|tsx|jsx)"],
    coverageDirectory: "./coverage",
    coverageThreshold: {
        global: {
            branches: 10,
            statements: 10,
        },
    },
};

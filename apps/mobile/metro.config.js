// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Find the project and root directories
const root = __dirname;

const config = getDefaultConfig(root);

config.resolver = {
    extraNodeModules: {
        src: path.resolve(__dirname, "src"),
    },
};

module.exports = config;

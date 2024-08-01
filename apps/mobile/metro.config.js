// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Find the project and root directories
const root = __dirname;

const config = getDefaultConfig(root);

config.resolver = {
    extraNodeModules: {
        crypto: path.resolve(__dirname, "src/common/polyfills/Crypto"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        url: require.resolve("url"),
    },
};

module.exports = config;

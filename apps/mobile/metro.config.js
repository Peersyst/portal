// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");
const path = require("path");

// Find the project and workspace directories
const workspaceRoot = path.resolve(__dirname, "../../");
const projectRoot = __dirname;

// Load the default Expo config
const defaultConfig = getDefaultConfig(projectRoot);

/**
 * Add the monorepo paths to the Metro config.
 * This allows Metro to resolve modules from the monorepo.
 *
 * @see https://docs.expo.dev/guides/monorepos/#modify-the-metro-config
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withMonorepoPaths(config) {
    // Watch all files in the monorepo
    config.watchFolders = [workspaceRoot];

    // Resolve modules within the project's `node_modules` first, then all monorepo modules
    config.resolver.nodeModulesPaths = [path.resolve(projectRoot, "node_modules"), path.resolve(workspaceRoot, "node_modules")];

    return config;
}

/**
 * Move the Metro cache to the `.cache/metro` folder.
 * If you have any environment variables, you can configure Turborepo to invalidate it when needed.
 *
 * @see https://turbo.build/repo/docs/reference/configuration#env
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withTurborepoManagedCache(config) {
    config.cacheStores = [new FileStore({ root: path.join(__dirname, ".cache/metro") })];
    return config;
}

/**
 * Add polyfills to the Metro config.
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withPolyfills(config) {
    config.resolver.extraNodeModules = {
        crypto: path.resolve(projectRoot, "src/common/polyfills/Crypto"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        url: require.resolve("url"),
    };

    return config;
}

const config = withTurborepoManagedCache(withMonorepoPaths(withPolyfills(defaultConfig)));

// Resolve our exports in workspace packages
// https://github.com/expo/expo/issues/26926
config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ["require", "import", "react-native"];

module.exports = config;

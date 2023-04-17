/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Find the playground and project directories
const playgroundRoot = __dirname;
const projectRoot = path.resolve(playgroundRoot, "..");

// 1. Watch all files within the monorepo
config.watchFolders = [projectRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(playgroundRoot, "node_modules"),
    path.resolve(projectRoot, "node_modules"),
    path.resolve(projectRoot, "src"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

module.exports = config;

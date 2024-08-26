import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    entry: ["src/**/*.ts", "src/**/*.tsx", "src/assets/fonts/*.ttf", "src/styles/fonts.css"],
    format: ["esm", "cjs"],
    dts: true,
    minify: true,
    esbuildOptions(options) {
        options.assetNames = "[dir]/[name]";
    },
    loader: {
        ".ttf": "file",
        ".css": "file",
    },
    ...options,
}));

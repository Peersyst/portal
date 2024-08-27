import { defineConfig, Options } from "@shared/tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*.ts", "src/**/*.tsx", "src/assets/fonts/*.ttf", "src/styles/fonts.css"],
    format: ["esm", "cjs"],
    dts: true,
    esbuildOptions(options) {
        options.assetNames = "[dir]/[name]";
    },
    loader: {
        ".ttf": "file",
        ".css": "file",
    },
    ...options,
}));

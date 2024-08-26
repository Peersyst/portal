import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    entry: ["src/**/*"],
    format: ["esm", "cjs"],
    dts: true,
    minify: true,
    esbuildOptions(options) {
        options.assetNames = "[dir]/[name]";
    },
    loader: {
        ".json": "file",
    },
    ...options,
}));

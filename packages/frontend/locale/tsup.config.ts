import { defineConfig, Options } from "@shared/tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*"],
    format: ["esm", "cjs"],
    dts: true,
    esbuildOptions(options) {
        options.assetNames = "[dir]/[name]";
    },
    loader: {
        ".json": "file",
    },
    ...options,
}));

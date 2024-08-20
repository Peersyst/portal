import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    entry: ["src/**/*.ts", "src/**/*.tsx"],
    format: ["esm", "cjs"],
    dts: true,
    minify: true,
    ...options,
}));

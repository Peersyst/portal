import { defineConfig, Options } from "./src";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*.ts"],
    format: ["esm", "cjs"],
    dts: true,
    ...options,
}));

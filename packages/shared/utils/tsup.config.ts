import { defineConfig, Options } from "@shared/tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*.ts"],
    format: ["esm", "cjs"],
    dts: true,
    ...options,
}));

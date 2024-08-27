import { defineConfig, Options } from "@shared/tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*.mjs"],
    format: ["cjs"],
    ...options,
}));

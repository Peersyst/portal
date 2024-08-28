import { defineConfig } from "./src";

export default defineConfig({
    entry: ["src/**/*.ts"],
    format: ["esm", "cjs"],
    dts: true,
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [
            nodePolyfills({
                include: ["buffer", "events"],
                globals: {
                    global: true,
                    Buffer: false,
                    process: false,
                },
            }),
            react({
                babel: {
                    plugins: ["styled-components"],
                    babelrc: false,
                    configFile: false,
                },
            }),
        ],
        define: {
            "process.env": env,
        },
        resolve: {
            alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
        },
        server: {
            port: 3000,
        },
    };
});

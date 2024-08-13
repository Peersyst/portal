import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        nodePolyfills({
            include: ["buffer", "events"],
            globals: {
                global: true,
                Buffer: false,
                process: false,
            },
        }),
        react(),
        tsconfigPaths({
            projects: [path.resolve(__dirname, "tsconfig.app.json")], // Adjust the path as necessary
        }),
    ],
    define: {
        "process.env": process.env,
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
        port: 3000,
    },
});

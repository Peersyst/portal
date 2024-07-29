const watchPackages = require("node-watch");
const { execSync } = require("node:child_process");
const { readdirSync, existsSync } = require("node:fs");
const debounce = require("debounce");

const watcher = watchPackages("./packages/", {
    recursive: true,
    filter: (f, skip) => {
        if (!/packages\/[^\/]+\/src\//.test(f)) {
            return skip;
        }
        return true;
    },
});

function syncChanges(_action, path) {
    const package = path.split("/")[1];

    console.log("Change detected in packages, syncing changes to apps...");

    const apps = readdirSync("./apps");
    apps.forEach((app) => {
        try {
            execSync(`cd ./packages/${package} && yarn build && cd ../..`, { stdio: "pipe" });
            const exists = existsSync(`./apps/${app}/node_modules/@cbdc-wallet/${package}`);
            if (exists) {
                execSync(`rm -rf ./apps/${app}/node_modules/@cbdc-wallet/${package}/dist/*`, { stdio: "pipe" });
                execSync(`cp -r ./packages/${package}/dist/* ./apps/${app}/node_modules/@cbdc-wallet/${package}/dist`, {
                    stdio: "pipe",
                });
            }
        } catch (e) {}
    });
}

watcher.on("change", debounce(syncChanges, 1000));

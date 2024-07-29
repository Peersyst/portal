const { execSync, spawn } = require("node:child_process");

async function watchedCommand(command) {
    const watchPackagesProcess = spawn("node ./scripts/watch-packages.js", { stdio: "inherit" });
    execSync(command, { stdio: "inherit" });
    watchPackagesProcess.kill();
}

watchedCommand(process.argv.slice(2).join(" "));

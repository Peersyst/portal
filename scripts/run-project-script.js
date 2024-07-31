const { execSync } = require("node:child_process");

function runProjectScript(project, script) {
    execSync(`node ./scripts/watched-command.js nx run-many --target=${script} --output-style=stream --projects ${project}`, {
        stdio: "inherit",
    });
}

runProjectScript(process.argv[2], process.argv[3]);

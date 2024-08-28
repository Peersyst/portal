#!/usr/bin/env node
/* eslint-disable no-console */

import { exec } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnTerminal } from "./terminal.mjs";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const GROUPS = {
    app: "apps",
    pkg: "packages",
    deps: "deps",
};

const args = process.argv.slice(2);
const groupArg = args[0];
const group = GROUPS[groupArg];

if (group) {
    const target = args[1];

    const depsFlagIndex = args.findIndex((arg) => arg === "--deps");
    const includeDeps = depsFlagIndex !== -1;
    if (includeDeps) {
        args.splice(depsFlagIndex, 1);

        // Runs the deps command in a new terminal
        exec(`npx nr genesys deps ${target} dev`);
    }

    // TODO: Support packages
    if (group === GROUPS.pkg) {
        console.error("Packages are not yet supported");
        process.exit(1);
    }

    if (group === GROUPS.app || group === GROUPS.pkg) {
        const targetScript =
            group === GROUPS.app
                ? `cd ./${group}/${target} && nr ${args.slice(2).join(" ")}`
                : `npx turbo ${args.slice(2).join(" ")} --filter=${target}`;
        // Runs the app/package command in a new terminal, if the deps command is not run build its dependencies first
        spawnTerminal(`cd ${process.cwd()} ${includeDeps ? "" : `&& npx turbo build --filter=${target}^...`} && ${targetScript}`);
    } else {
        const script = args[2];
        // Runs the dependencies script in a new terminal
        spawnTerminal(`cd ${process.cwd()} && node ${__dirname}/turbo.mjs ${script} --filter=${target}^... ${args.slice(3).join(" ")}`);
    }

    process.exit(0);
} else {
    console.error(`Invalid group: ${groupArg}.
Available groups: ${Object.keys(GROUPS).join(", ")}
Usage: genesys [group] [target] [...args]`);

    process.exit(1);
}

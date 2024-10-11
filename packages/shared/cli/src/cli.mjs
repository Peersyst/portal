#!/usr/bin/env node
/* eslint-disable no-console */

import path from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "commander";
import { execSync } from "node:child_process";
import fs from "node:fs";
import { getPackagesPaths } from "./utils/get-packages-paths.mjs";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const program = new Command();

program.name("genesys").description("Genesys CLI").version("0.0.0");

program
    .command("migrate-to-bundle-exports")
    .description("Migrates packages exports to bundle exports version. (Must be executed from the root of the workspace)")
    .action(() => {
        console.log("🛠️ Migrating to bundle exports");

        // For each package in the workspace that has a `build` script, run the migrate-to-bundle-exports.mjs script
        const pkgs = getPackagesPaths();

        for (const pkg of pkgs) {
            const packagePath = path.join(process.cwd(), pkg);
            const packageJsonPath = path.join(packagePath, "package.json");

            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

            if (packageJson.scripts && packageJson.scripts.build) {
                console.log(`🛠️ Migrating package: ${pkg}`);
                execSync(`node ${path.join(__dirname, "migrate-to-bundle-exports.mjs")} ${packagePath}`);
                console.log(`✅ Migrated package: ${pkg}`);
            }
        }

        console.log("✅ Migration to bundle exports completed");
    });

program
    .command("bundle")
    .description("Bundles the package for production. (Must be executed fro the root of the package to bundle)")
    .action(() => {
        console.log("📦 Bundling the package");

        execSync(`node ${path.join(__dirname, "bundle.mjs")}`);

        console.log("✅ Bundling completed");
    });

program.parse();

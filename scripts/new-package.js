import * as fs from "fs";
import path from "path";
import readline from "readline";
import { exec } from "child_process";

import ora from "ora";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to create a file with given contents
function createFile(filePath, contents) {
    fs.writeFileSync(filePath, contents);
}

// Function to create the package structure
function createPackage(name, version, author, description, license, keywords) {
    // Create the folder if it doesn't already exist

    const packagePath = path.join("packages", name);
    const srcFolderPath = path.join(packagePath, "src");
    if (!fs.existsSync(packagePath)) {
        fs.mkdirSync(packagePath);
    }

    // Define the file paths
    const packageJsonPath = path.join(packagePath, "package.json");
    const tsconfigJsonPath = path.join(packagePath, "tsconfig.json");
    const readmePath = path.join(packagePath, "README.md");
    const gitignorePath = path.join(packagePath, ".gitignore");
    const eslintPath = path.join(packagePath, ".eslintrc");
    const eslintIgnorePath = path.join(packagePath, ".eslintignore");
    const indexTsPath = path.join(srcFolderPath, "index.ts");

    // Define the contents for each file
    const packageJsonContents = `{
        "name": "@cbdc-wallet/${name}",
        "version": "${version}",
        "description": "${description}",
        "main": "dist/src/index.js",
        "types": "dist/src/index.d.ts",
        "scripts": {
            "build": "tsc && rm -rf ./node_modules/@cbdc-wallet"
        },
        "devDependencies": {
            "@cbdc-wallet/eslint": "file:../eslint",
            "eslint": "^8.33.0",
            "typescript": "^5.3.2"
        },
        "sideEffects": false,
        "author": "${author}",
        "license": "${license}",
        "keywords": ${JSON.stringify(keywords.split(","))}
    }`;

    const tsconfigJsonContents = `{
        "compilerOptions": {
            "module": "commonjs",
            "declaration": true,
            "removeComments": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "allowSyntheticDefaultImports": true,
            "resolveJsonModule": true,
            "esModuleInterop": true,
            "target": "es2017",
            "sourceMap": true,
            "outDir": "./dist",
            "incremental": true,
            "skipLibCheck": true,
            "composite": true,
            "strict": true,
            "strictPropertyInitialization": false
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules"]
    }`;

    const readmeContents = `# ${name}`;

    const gitignoreContents = `node_modules
dist
.env
.DS_Store`;

    const eslintContents = `{
    "extends": ["../../node_modules/@cbdc-wallet/eslint/configs/.eslintrc-node"]
}`;

    const eslintIgnoreContents = `node_modules
build
dist
coverage`;

    const indexTsContents = `// This is the entry point of the TypeScript application.
console.log("Hello, World!");
`;

    // Create the files with the specified contents
    createFile(packageJsonPath, packageJsonContents);
    createFile(tsconfigJsonPath, tsconfigJsonContents);
    createFile(readmePath, readmeContents);
    createFile(gitignorePath, gitignoreContents);
    createFile(eslintPath, eslintContents);
    createFile(eslintIgnorePath, eslintIgnoreContents);
    fs.mkdirSync(srcFolderPath);
    createFile(indexTsPath, indexTsContents);

    exec(`prettier --write ./packages/${name}`);

    console.log(`📦 Package ${name} created successfully!`);

    const spinner = ora("Installing dependencies...").start();

    exec(`cd packages/${name} && yarn`, (error) => {
        if (error) {
            spinner.fail("Failed to install dependencies!");
            return;
        }
    });

    spinner.succeed("Dependencies installed successfully!");
}

// Prompt the user for input
rl.question("▶️ Enter the package name: ", (name) => {
    rl.question("▶️ Enter the version (default: 1.0.0): ", (version) => {
        version = version || "1.0.0";
        rl.question("▶️ Enter the author: ", (author) => {
            rl.question("▶️ Enter the description: ", (description) => {
                rl.question("▶️ Enter the license (default: ISC): ", (license) => {
                    license = license || "ISC";
                    rl.question("▶️ Enter the keywords (comma-separated): ", (keywords) => {
                        createPackage(name, version, author, description, license, keywords);
                        rl.close();
                    });
                });
            });
        });
    });
});

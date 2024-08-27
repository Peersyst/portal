module.exports = {
    plugins: ["import"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    rules: {
        "import/no-unresolved": "error",
        "import/no-extraneous-dependencies": "error",
        "no-console": "warn",
        "no-empty": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-require-imports": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-namespace": "off",
    },
    env: {
        node: true,
    },
    ignorePatterns: ["dist"],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};

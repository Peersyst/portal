module.exports = {
    extends: ["./.eslintrc.base.js", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
    plugins: ["react"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {
        "react-hooks/exhaustive-deps": "off",
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
        "jsdoc/require-jsdoc": [
            "error",
            {
                require: {
                    ArrowFunctionExpression: false,
                    ClassDeclaration: false,
                    ClassExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    MethodDefinition: false,
                },
                contexts: [
                    "Program > FunctionDeclaration:not([id.name=/^[A-Z]/])",
                    "Program > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression:not([parent.id.name=/^[A-Z]/])",
                    "Program > VariableDeclaration > VariableDeclarator > FunctionExpression:not([parent.id.name=/^[A-Z]/])",
                    "ExportNamedDeclaration > FunctionDeclaration:not([id.name=/^[A-Z]/])",
                    "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression:not([parent.id.name=/^[A-Z]/])",
                    "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > FunctionExpression:not([parent.id.name=/^[A-Z]/])",
                    "ExportDefaultDeclaration > FunctionDeclaration:not([id.name=/^[A-Z]/])",
                    "ExportDefaultDeclaration > ArrowFunctionExpression:not([parent.id.name=/^[A-Z]/])",
                    "ExportDefaultDeclaration > FunctionExpression:not([parent.id.name=/^[A-Z]/])",
                    "MethodDefinition:not([kind='constructor'])",
                ],
            },
        ],
    },
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
};

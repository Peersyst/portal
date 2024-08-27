module.exports = {
    extends: [require.resolve("@shared/eslint/react")],
    rules: {
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
    },
};

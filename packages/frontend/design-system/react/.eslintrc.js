module.exports = {
    extends: [require.resolve("@shared/eslint/react")],
    overrides: [
        {
            files: ["storybook/**/*"],
            rules: {
                "jsdoc/require-jsdoc": "off",
            },
        },
    ],
};

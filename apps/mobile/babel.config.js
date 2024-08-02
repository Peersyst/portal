const commonPlugins = ["transform-inline-environment-variables"];

const envPlugins = {
    production: ["transform-remove-console"],
};

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [...(envPlugins[process.env.NODE_ENV] || []), ...commonPlugins],
    };
};

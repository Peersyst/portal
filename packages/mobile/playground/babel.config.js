module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "babel-plugin-module-resolver",
                {
                    root: ["../src/"],
                    alias: {
                        ui: "../src/ui",
                        domain: "../src/domain",
                        asset: "../src/asset",
                        "data-access": "../src/data-access",
                        common: "../src/common",
                    },
                },
            ],
            "react-native-reanimated/plugin",
        ],
    };
};

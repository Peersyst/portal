import { ExpoConfig, ConfigContext } from "@expo/config";

/**
 * The app config.
 * @param config The Expo config.
 * @returns The Expo config.
 */
export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "mobile-base-project",
    slug: "mobile-base-project",
    owner: "peersyst",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
    },
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        supportsTablet: false,
        /*bundleIdentifier: "",
        buildNumber: process.env.BUILD_NUMBER || "0",
        config: {
            usesNonExemptEncryption: false,
        },*/
    },
    android: {
        /*package: "",
        versionCode: Number(process.env.BUILD_NUMBER) || 0,*/
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
        softwareKeyboardLayoutMode: "pan",
    },
    web: {
        favicon: "./assets/images/favicon.png",
    },
    plugins: [
        "expo-localization",
        [
            "expo-barcode-scanner",
            {
                cameraPermission: "Allow $(PRODUCT_NAME) to access camera.",
            },
        ],
    ],
});

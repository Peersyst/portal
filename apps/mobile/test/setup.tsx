// Load jest-native adds custom jest matchers for asserting on React Native.
import "@testing-library/jest-native";

// Load polyfills
import "../src/core/polyfills";

// Set up data access
import "../src/core/data-access/setup";

// Set up domain
import "../src/core/domain/setup";

// Mock `withRetries` to avoid retries in tests
jest.mock("@shared/utils", () => ({
    ...(jest.requireActual("@shared/utils") as any),
    withRetries: (fn: () => any) => fn(),
}));

// Use require.resolve to force the module to be resolved using the CSJ entry point. Otherwise, jest cannot transform ESM.
jest.mock("@aws-sdk/client-appconfigdata", () => require.resolve("@aws-sdk/client-appconfigdata"));

// Mock `configManager`
jest.mock("../src/core/config", () => {
    const { ConfigManagerMock } = require("./mocks/config/config.manager.mock");

    return {
        configManager: new ConfigManagerMock(),
    };
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// Add es module to @react-navigation/native
jest.mock("@react-navigation/native", () => ({
    __esModule: true,
    ...jest.requireActual("@react-navigation/native"),
}));

// Mock expo-localization
jest.mock("expo-localization", () => ({
    ...jest.requireActual("expo-localization"),
    digitGroupingSeparator: ",",
    decimalSeparator: ".",
}));

// Mock @peersyst/react-native-component
import { BackdropProps } from "@peersyst/react-native-components";
jest.mock("@peersyst/react-native-components", () => {
    const MockBackdrop = ({ children, onOpen, onClose, onExited, onEntered }: BackdropProps) => {
        const handleClose = () => {
            onClose?.();
            onExited?.();
        };
        onOpen?.();
        onEntered?.();
        return <>{typeof children === "function" ? children(true, jest.fn(handleClose)) : children}</>;
    };
    return {
        __esModule: true,
        Backdrop: MockBackdrop,
        ...jest.requireActual("@peersyst/react-native-components"),
    };
});

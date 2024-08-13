import "@testing-library/jest-native";

import "@/common/polyfills";

import "react-native-gesture-handler/jestSetup";

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-navigation/native", () => ({
    __esModule: true,
    ...jest.requireActual("@react-navigation/native"),
}));

jest.mock("expo-localization", () => ({
    ...jest.requireActual("expo-localization"),
    digitGroupingSeparator: ",",
    decimalSeparator: ".",
}));

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

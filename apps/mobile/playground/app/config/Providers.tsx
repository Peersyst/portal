import { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "@peersyst/react-native-components";
import { I18nextProvider } from "react-i18next";
import { ConfigManagerProvider } from "@peersyst/config";
import { configManager } from "@/common/config";
import i18n from "@/ui/locale";
import UIConfigProvider from "./UIConfigProvider";
import StylesheetProvider from "ui/stylesheets/StylesheetsProvider";

export default function Providers({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
        <ConfigManagerProvider value={configManager}>
            <SafeAreaProvider>
                <I18nextProvider i18n={i18n}>
                    <UIConfigProvider>
                        <StylesheetProvider>
                            <ToastProvider>{children}</ToastProvider>
                        </StylesheetProvider>
                    </UIConfigProvider>
                </I18nextProvider>
            </SafeAreaProvider>
        </ConfigManagerProvider>
    );
}

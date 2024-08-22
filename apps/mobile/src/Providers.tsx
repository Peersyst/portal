import { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import QueryClientProvider from "./query/QueryClientProvider";
import { ToastProvider } from "@peersyst/react-native-components";
import { ConfigProvider } from "./config";
import { I18nextProvider } from "react-i18next";
import i18n from "./locale";
import { ErrorHandler } from "./common/components/feedback/ErrorHandler/ErrorHandler";
import StylesheetProvider from "./stylesheets/StylesheetsProvider";
import { ConfigManagerProvider } from "@frontend/config/react";
import { configManager } from "./core/config";

const Providers = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
    <ConfigManagerProvider value={configManager}>
        <SafeAreaProvider>
            <I18nextProvider i18n={i18n}>
                <QueryClientProvider>
                    <ConfigProvider>
                        <StylesheetProvider>
                            <ToastProvider>
                                <ErrorHandler>{children}</ErrorHandler>
                            </ToastProvider>
                        </StylesheetProvider>
                    </ConfigProvider>
                </QueryClientProvider>
            </I18nextProvider>
        </SafeAreaProvider>
    </ConfigManagerProvider>
);

export default Providers;

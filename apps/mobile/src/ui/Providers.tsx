import { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import QueryClientProvider from "./query/QueryClientProvider";
import { ToastProvider } from "@peersyst/react-native-components";
import { ConfigProvider } from "./config";
import { I18nextProvider } from "react-i18next";
import i18n from "./locale/i18n";
import ErrorHandler from "./common/components/feedback/ErrorHandler/ErrorHandler";
import StylesheetProvider from "./stylesheets/StylesheetsProvider";

const Providers = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
    <SafeAreaProvider>
        <I18nextProvider i18n={i18n}>
            <ConfigProvider>
                <StylesheetProvider>
                    <ToastProvider>
                        <ErrorHandler>
                            <QueryClientProvider>{children}</QueryClientProvider>
                        </ErrorHandler>
                    </ToastProvider>
                </StylesheetProvider>
            </ConfigProvider>
        </I18nextProvider>
    </SafeAreaProvider>
);

export default Providers;

import { PropsWithChildren } from "react";
import { ToastProvider } from "@peersyst/react-components";
import QueryClientProvider from "./query/context/QueryClientProvider";
import { ConfigProvider } from "./config";
import ErrorHandler from "./common/components/feedback/ErrorHandler/ErrorHandler";
import { ConfigManagerProvider } from "@peersyst/config";
import { configManager } from "@/common/config";

export default function Providers({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
        <ConfigManagerProvider value={configManager}>
            <ConfigProvider>
                <ToastProvider>
                    <ErrorHandler>
                        <QueryClientProvider>{children}</QueryClientProvider>
                    </ErrorHandler>
                </ToastProvider>
            </ConfigProvider>
        </ConfigManagerProvider>
    );
}

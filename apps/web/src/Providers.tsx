import { PropsWithChildren } from "react";
import { ToastProvider } from "@peersyst/react-components";
import { QueryClientProvider } from "./query/query-client.provider";
import { ConfigProvider } from "./config";
import { ErrorHandler } from "./common/components/feedback/error-handler/error-handler";
import { ConfigManagerProvider } from "@frontend/config/react";
import { configManager } from "./core/config";

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

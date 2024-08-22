import { PropsWithChildren } from "react";
import { ToastProvider } from "@peersyst/react-components";
import { QueryClientProvider } from "./query/QueryClientProvider";
import { ConfigProvider } from "./config";
import { ErrorHandler } from "./common/components/feedback/ErrorHandler/ErrorHandler";
import { configManager } from "@/core/config";
import { ConfigManagerProvider } from "@frontend/config/react";

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

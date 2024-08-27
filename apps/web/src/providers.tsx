import { PropsWithChildren } from "react";
import { ToastProvider } from "@frontend/design-system-react/toast";
import { QueryClientProvider } from "./query/query-client.provider";
import { ErrorHandler } from "./common/components/feedback/error-handler/error-handler";
import { ConfigManagerProvider } from "@frontend/config/react";
import { configManager } from "./core/config";
import { DSProvider } from "./design-system/ds.provider";

export default function Providers({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
        <ConfigManagerProvider value={configManager}>
            <DSProvider>
                <ToastProvider>
                    <ErrorHandler>
                        <QueryClientProvider>{children}</QueryClientProvider>
                    </ErrorHandler>
                </ToastProvider>
            </DSProvider>
        </ConfigManagerProvider>
    );
}

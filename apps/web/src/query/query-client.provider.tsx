import { PropsWithChildren } from "react";
import { QueryClient, QueryClientConfig, QueryCache, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { isDomainError } from "@frontend/core/domain/error";
import { BrowserErrorEvent } from "@frontend/core/ui/error/browser";

/**
 * Receives an error and dispatches a UIErrorEvent.
 * @param error The error to handle.
 */
function handleQueryClientError(error: any): void {
    // eslint-disable-next-line no-console
    console.error(error);
    if (isDomainError(error)) BrowserErrorEvent.dispatch(error.message, error.severity, error.data);
    else BrowserErrorEvent.dispatch(error.message);
}

const queryClientConfig: QueryClientConfig = {
    queryCache: new QueryCache({
        onError: handleQueryClientError,
    }),
    defaultOptions: {
        queries: {
            retry: 2,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            gcTime: Infinity,
        },
        mutations: {
            onError: handleQueryClientError,
        },
    },
};

const queryClient = new QueryClient(queryClientConfig);

export const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
    return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};

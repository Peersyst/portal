import { PropsWithChildren } from "react";
import { QueryClient, QueryClientConfig, QueryCache } from "@frontend/query/react";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { isDomainError } from "@frontend/core/domain/error";
import { BrowserErrorEvent } from "@frontend/core/ui/error/browser";

/**
 * Receives an error and dispatches a UIErrorEvent
 * @param error The error to handle
 */
function handleQueryClientError(error: any): void {
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

const asyncStoragePersister = createSyncStoragePersister({
    storage: localStorage,
});

export const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: asyncStoragePersister, maxAge: 604800000 }}>
            {children}
        </PersistQueryClientProvider>
    );
};

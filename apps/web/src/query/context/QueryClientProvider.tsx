import { PropsWithChildren } from "react";
import UIErrorEvent from "@/error/UIErrorEvent";
import { QueryClient, QueryClientConfig, QueryCache } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { isDomainError } from "@frontend/core/domain/error";

/**
 * Receives an error and dispatches a UIErrorEvent
 * @param error The error to handle
 */
function handleQueryClientError(error: any): void {
    if (isDomainError(error)) UIErrorEvent.dispatch(error.message, error.severity, error.data);
    else UIErrorEvent.dispatch(error.message);
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

const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: asyncStoragePersister, maxAge: 604800000 }}>
            {children}
        </PersistQueryClientProvider>
    );
};

export default QueryClientProvider;

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientConfig, QueryCache } from "@tanstack/react-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactNativeErrorEvent } from "@frontend/core/ui/error/react-native";
import { isDomainError } from "@frontend/core/domain/error";

/**
 * Receives an error and dispatches a UIErrorEvent.
 * @param error The error to handle.
 */
function handleQueryClientError(error: any): void {
    if (isDomainError(error)) ReactNativeErrorEvent.dispatch(error.message, error.severity, error.data);
    else ReactNativeErrorEvent.dispatch(error.message);
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

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
});

const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: asyncStoragePersister, maxAge: 604800000 }}>
            {children}
        </PersistQueryClientProvider>
    );
};

export default QueryClientProvider;

import { PropsWithChildren } from "react";
import { IDomainError } from "ui/adapter/IDomainError";
import UIErrorEvent from "ui/error/UIErrorEvent";
import { QueryClient, QueryClientConfig, QueryCache } from "@tanstack/react-query";
import isDomainError from "../../adapter/utils/isDomainError";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

/**
 * Receives an error and dispatches a UIErrorEvent
 * @param error The error to handle
 */
function handleQueryClientError(error: IDomainError | any): void {
    if (isDomainError(error)) UIErrorEvent.dispatch(error.code, error.severity, error.data);
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

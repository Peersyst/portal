import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from "@tanstack/react-query";
import { IDomainError } from "ui/adapter/IDomainError";
import UIErrorEvent from "ui/error/UIErrorEvent";

function handleQueryClientError(error: IDomainError | any): void {
    if ("code" in error) UIErrorEvent.dispatch(error.code, error.severity);
    else UIErrorEvent.dispatch(error.message);
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 600000,
            onError: handleQueryClientError,
            networkMode: "offlineFirst",
        },
        mutations: {
            onError: handleQueryClientError,
            networkMode: "offlineFirst",
        },
    },
});

const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
    return <BaseQueryClientProvider client={queryClient}>{children}</BaseQueryClientProvider>;
};

export default QueryClientProvider;

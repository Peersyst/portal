import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from "react-query";
import { IDomainError } from "ui/adapter/IDomainError";
import UIErrorEvent from "ui/error/UIErrorEvent";

function handleQueryClientError(error: IDomainError | any): void {
    if ("code" in error) UIErrorEvent.dispatch(error.code /* Handle severity by code? */);
    else UIErrorEvent.dispatch(error.message);
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 600000,
            onError: handleQueryClientError,
        },
        mutations: {
            onError: handleQueryClientError,
        },
    },
});

const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
    return <BaseQueryClientProvider client={queryClient}>{children}</BaseQueryClientProvider>;
};

export default QueryClientProvider;

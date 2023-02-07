import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from "react-query";
import UIErrorEvent from "ui/error/UIErrorEvent";

function handleQueryClientError(error: any): void {
    UIErrorEvent.dispatch(error.message, error.severity);
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

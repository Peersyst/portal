import { PropsWithChildren, useEffect } from "react";
import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from "react-query";
import useHandleErrorMessage from "./useHandleErrorMessage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 600000,
        },
    },
});

const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const handleErrorMessage = useHandleErrorMessage();

    useEffect(() => {
        queryClient.setDefaultOptions({
            queries: {
                retry: false,
                refetchOnWindowFocus: false,
                staleTime: 600000,
            },
            mutations: {
                onError: handleErrorMessage,
            },
        });
    }, []);

    return <BaseQueryClientProvider client={queryClient}>{children}</BaseQueryClientProvider>;
};

export default QueryClientProvider;

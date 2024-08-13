import { JSXElementConstructor, PropsWithChildren, ReactElement } from "react";
import { render, RenderAPI, RenderOptions, renderHook, RenderHookOptions, RenderHookResult } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider, QueryClientConfig } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { deepmerge } from "@peersyst/react-utils";
import { NavigationContainer } from "@react-navigation/native";
import { ModalProvider } from "@peersyst/react-native-components";
import { ConfigProvider } from "@/ui/config";
import { I18nextProvider } from "react-i18next";
import i18n from "@/ui/locale";

export interface CreateWrapperConfig {
    queryClientConfig?: QueryClientConfig;
}

export const createWrapper = ({ queryClientConfig }: CreateWrapperConfig = {}): JSXElementConstructor<PropsWithChildren> => {
    const queryClient = new QueryClient(
        deepmerge(
            {
                defaultOptions: {
                    queries: {
                        networkMode: "offlineFirst",
                        retry: false,
                    },
                    mutations: {
                        networkMode: "offlineFirst",
                    },
                },
                loggger: {
                    // eslint-disable-next-line no-console
                    log: console.log,
                    // eslint-disable-next-line no-console
                    warn: console.warn,
                    error: () => undefined,
                },
            },
            queryClientConfig,
        ),
    );

    return function Wrapper({ children }: PropsWithChildren): JSX.Element {
        return (
            <I18nextProvider i18n={i18n}>
                <QueryClientProvider client={queryClient}>
                    <SafeAreaProvider
                        initialMetrics={{
                            insets: { top: 0, left: 0, right: 0, bottom: 0 },
                            frame: { x: 0, y: 0, width: 0, height: 0 },
                        }}
                    >
                        <ConfigProvider>
                            <NavigationContainer>
                                <ModalProvider>{children}</ModalProvider>
                            </NavigationContainer>
                        </ConfigProvider>
                    </SafeAreaProvider>
                </QueryClientProvider>
            </I18nextProvider>
        );
    };
};

const customRender = (
    ui: ReactElement,
    { queryClientConfig, ...rest }: Omit<RenderOptions, "wrapper"> & CreateWrapperConfig = {},
): RenderAPI => render(ui, { wrapper: createWrapper({ queryClientConfig }), ...rest });

const customRenderHook = <TResult, TProps>(
    callback: (props: TProps) => TResult,
    { queryClientConfig, ...rest }: Partial<Omit<RenderHookOptions<TProps>, "wrapper">> & CreateWrapperConfig = {},
): RenderHookResult<TResult, TProps> =>
    renderHook<TResult, TProps>(callback, {
        wrapper: createWrapper({ queryClientConfig }),
        // @testing-library/react-native who made that type -.-?
        ...(rest as any),
    });

const translate = i18n.t;

export * from "@testing-library/react-native";
export * from "@testing-library/jest-native";
export { customRender as render };
export { customRenderHook as renderHook };
export { translate };

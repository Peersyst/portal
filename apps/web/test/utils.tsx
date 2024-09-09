import { JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode } from "react";
import { render, RenderOptions, RenderResult, renderHook, RenderHookResult, ClientRenderHookOptions } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider, QueryClientConfig } from "@tanstack/react-query";
import { InitialEntry } from "history";
import { deepmerge } from "@peersyst/react-utils";
import { I18nextProvider } from "react-i18next";
import { queries, Queries } from "@testing-library/dom";
import { Container as RendererableContainer } from "react-dom/client";
import { ConfigManagerProvider } from "@frontend/config/react";
import { ConfigManagerMock } from "@frontend/config/mocks/core/manager";
import { DSProvider } from "../src/design-system/ds.provider";
import i18next from "i18next";
import { ToastProvider } from "@frontend/design-system-react/toast";
import { ModalProvider } from "@frontend/design-system-react/modal";

export interface CreateWrapperConfig {
    queryClientConfig?: QueryClientConfig;
}

export interface RouterConfig {
    initialEntries?: InitialEntry[];
    initialIndex?: number;
    path?: string;
}

/**
 * Creates a wrapper component for the tests.
 * @param config The config for the wrapper.
 * @returns The wrapper component.
 */
export const createWrapper = ({ queryClientConfig }: CreateWrapperConfig = {}): JSXElementConstructor<{ children: ReactNode }> => {
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
            <ConfigManagerProvider value={new ConfigManagerMock()}>
                <I18nextProvider i18n={i18next}>
                    <DSProvider>
                        <QueryClientProvider client={queryClient}>
                            <ToastProvider>
                                <ModalProvider>{children}</ModalProvider>
                            </ToastProvider>
                        </QueryClientProvider>
                    </DSProvider>
                </I18nextProvider>
            </ConfigManagerProvider>
        );
    };
};

/**
 * Custom render function for the tests.
 * @param ui The element to render.
 * @param config The config.
 * @returns The rendered result.
 */
const customRender = (
    ui: ReactElement,
    {
        queryClientConfig,
        router: { path = "/", ...memoryRouterProps } = {},
        ...rest
    }: Omit<RenderOptions, "wrapper"> & CreateWrapperConfig & { router?: RouterConfig } = {},
): RenderResult => {
    return render(
        <MemoryRouter {...memoryRouterProps}>
            <Routes>
                <Route path={path} element={ui} />
            </Routes>
        </MemoryRouter>,
        {
            wrapper: createWrapper({ queryClientConfig }),
            ...rest,
        },
    );
};

/**
 * Custom render hook function for the tests.
 * @param callback The callback to render the hook.
 * @param config The config.
 * @returns The rendered hook.
 */
const customRenderHook = <
    TResult,
    TProps,
    Q extends Queries = typeof queries,
    Container extends RendererableContainer = HTMLElement,
    BaseElement extends Element | DocumentFragment = Container,
>(
    callback: (props: TProps) => TResult,
    { queryClientConfig, ...rest }: Omit<ClientRenderHookOptions<TProps, Q, Container, BaseElement>, "wrapper"> & CreateWrapperConfig = {},
): RenderHookResult<TResult, TProps> =>
    renderHook<TResult, TProps, Q, Container, BaseElement>(callback, { wrapper: createWrapper({ queryClientConfig }), ...rest });

const translate = i18next.t;

export * from "@testing-library/react";
export { customRender as render };
export { customRenderHook as renderHook };
export { translate };

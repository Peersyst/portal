import { Fragment, PropsWithChildren } from "react";
import { ToastProvider } from "@peersyst/react-components";
import QueryClientProvider from "./query/QueryClientProvider";
import { ConfigProvider } from "config";

const Providers = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
    <Fragment>
        <ConfigProvider>
            <ToastProvider>
                <QueryClientProvider>
                    {children}
                    {/*{process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}*/}
                </QueryClientProvider>
            </ToastProvider>
        </ConfigProvider>
    </Fragment>
);

export default Providers;

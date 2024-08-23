import * as React from "react";
import { ConfigProvider } from "@peersyst/react-components";
import { ReactNode } from "react";
import { StyleSheetManager } from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import { useDSConfig } from "./hook/use-ds-config";
import { DSConfigOptions } from "./ds.types";

export type ConfigProviderProps = DSConfigOptions & {
    children?: ReactNode;
};

export function DSProvider({ children, ...dsConfigOptions }: ConfigProviderProps): JSX.Element {
    const config = useDSConfig(dsConfigOptions);

    return (
        <ConfigProvider config={config}>
            <StyleSheetManager target={document.head}>
                <>
                    <GlobalStyles />
                    {children}
                </>
            </StyleSheetManager>
        </ConfigProvider>
    );
}

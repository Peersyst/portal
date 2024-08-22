import * as React from "react";
import { ConfigProvider as GenesysConfigProvider } from "@peersyst/react-components";
import { ReactNode } from "react";
import { StyleSheetManager } from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import { useUIConfig } from "./hook/useUIConfig";

export interface ConfigProviderProps {
    children?: ReactNode;
}

export function ConfigProvider({ children }: ConfigProviderProps): JSX.Element {
    const config = useUIConfig();

    return (
        <GenesysConfigProvider config={config}>
            <StyleSheetManager target={document.head}>
                <GlobalStyles />
            </StyleSheetManager>
            {children}
        </GenesysConfigProvider>
    );
}

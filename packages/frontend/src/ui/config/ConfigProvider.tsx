import { ConfigProvider as GenesysConfigProvider } from "@peersyst/react-components";
import { ReactNode } from "react";
import { StyleSheetManager } from "styled-components";
import useTranslate from "ui/locale/hooks/useTranslate";
import config from "./config";
import { GlobalStyles } from "./theme/GlobalStyles";

export interface ConfigProviderProps {
    children?: ReactNode;
}

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
    const translate = useTranslate("error");

    return (
        <GenesysConfigProvider config={{ ...config, translate }}>
            <StyleSheetManager target={document.head}>
                <GlobalStyles />
            </StyleSheetManager>
            {children}
        </GenesysConfigProvider>
    );
};

export default ConfigProvider;

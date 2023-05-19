import { ConfigProvider as GenesysConfigProvider } from "@peersyst/react-components";
import { ReactNode } from "react";
import { StyleSheetManager } from "styled-components";
import useTranslate from "ui/locale/hooks/useTranslate";
import config from "./config";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTranslation } from "react-i18next";

export interface ConfigProviderProps {
    children?: ReactNode;
}

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
    const translate = useTranslate("error");
    const { i18n } = useTranslation();

    return (
        <GenesysConfigProvider config={{ ...config, translate, locale: i18n.language }}>
            <StyleSheetManager target={document.head}>
                <GlobalStyles />
            </StyleSheetManager>
            {children}
        </GenesysConfigProvider>
    );
};

export default ConfigProvider;

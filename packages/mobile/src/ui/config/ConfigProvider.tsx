import { ConfigProvider as GenesysConfigProvider } from "@peersyst/react-native-components";
import useTranslate from "ui/locale/hooks/useTranslate";
import { ReactNode } from "react";
import config from "./config";
import { useTranslation } from "react-i18next";

export interface ConfigProviderProps {
    children?: ReactNode;
}

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
    const translate = useTranslate("error");
    const { i18n } = useTranslation();

    return <GenesysConfigProvider config={{ ...config, translate, locale: i18n.language }}>{children}</GenesysConfigProvider>;
};

export default ConfigProvider;

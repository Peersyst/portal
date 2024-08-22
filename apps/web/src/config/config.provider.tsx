import { ConfigProvider as GenesysConfigProvider } from "@peersyst/react-components";
import { ReactNode } from "react";
import { StyleSheetManager } from "styled-components";
import { GlobalStyles } from "../theme/global-styles";
import useUIConfig from "./hook/use-ui-config";

export interface ConfigProviderProps {
    children?: ReactNode;
}

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
    const config = useUIConfig();

    return (
        <GenesysConfigProvider config={config}>
            <StyleSheetManager target={document.head}>
                <GlobalStyles />
            </StyleSheetManager>
            {children}
        </GenesysConfigProvider>
    );
};

export default ConfigProvider;

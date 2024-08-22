import { ConfigProvider as GenesysConfigProvider } from "@peersyst/react-native-components";
import { ReactNode } from "react";
import useUIConfig from "./hook/use-ui-config";

export interface ConfigProviderProps {
    children?: ReactNode;
}

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
    const config = useUIConfig();

    return <GenesysConfigProvider config={config}>{children}</GenesysConfigProvider>;
};

export default ConfigProvider;

import { StylesheetProvider as RNSStylesheetProvider } from "@peersyst/react-native-styled";
import stylesheets from "./stylesheets";

const StylesheetProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <RNSStylesheetProvider stylesheets={stylesheets}>{children}</RNSStylesheetProvider>
);

export default StylesheetProvider;

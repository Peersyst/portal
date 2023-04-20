import "../../src/common/polyfills";
import "../../src/ui/locale/i18n";
import { StatusBar } from "@peersyst/react-native-components";
import Navigator from "./Navigator";
import Providers from "../../src/ui/Providers";
import { useLoad } from "../../src/ui/common/hooks/useLoad";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const loading = useLoad();

    const handleNavigatorReady = (): void => {
        if (!loading) SplashScreen.hideAsync();
    };

    return loading ? null : (
        <Providers>
            <Navigator onReady={handleNavigatorReady} />
            <StatusBar />
        </Providers>
    );
}

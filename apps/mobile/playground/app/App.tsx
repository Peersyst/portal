import "@/common/polyfills";
import "@/ui/locale";

import { StatusBar } from "@peersyst/react-native-components";
import Navigator from "./Navigator";
import * as SplashScreen from "expo-splash-screen";
import { useLoad } from "./hooks/useLoad";
import Providers from "./config/Providers";

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

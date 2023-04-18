import { Suspense } from "react";
import Providers from "ui/Providers";
import Navigator from "ui/navigator/Navigator";
import { useLoad } from "ui/common/hooks/useLoad";
import { Platform, UIManager, LogBox } from "react-native";
import { StatusBar } from "@peersyst/react-native-components";
import * as SplashScreen from "expo-splash-screen";
import "common/polyfills";
import "ui/locale/i18n";

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

//Explanation link :https://github.com/facebook/react-native/issues/12981#issuecomment-652745831
LogBox.ignoreLogs(["Setting a timer"]);

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

SplashScreen.preventAutoHideAsync();

const App = (): JSX.Element | null => {
    const loading = useLoad();

    const handleNavigatorReady = (): void => {
        if (!loading) SplashScreen.hideAsync();
    };

    return loading ? null : (
        <Suspense fallback={<></>}>
            <Providers>
                <Navigator onReady={handleNavigatorReady} />
                <StatusBar />
            </Providers>
        </Suspense>
    );
};

export default App;

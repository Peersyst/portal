// Load polyfills
import "./core/polyfills";

// Set up data access
import "./core/data-access/setup";

// Set up domain
import "./core/domain/setup";

// Load locale
import "./locale";

import { Suspense } from "react";
import { Platform, UIManager, LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useInit } from "./common/hooks/use-init";
import Providers from "./providers";
import Navigator from "./navigator/navigator";

// Explanation link :https://github.com/facebook/react-native/issues/12981#issuecomment-652745831
LogBox.ignoreLogs(["Setting a timer"]);

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

SplashScreen.preventAutoHideAsync();

const App = (): JSX.Element | null => {
    const { isLoading } = useInit();

    const handleNavigatorReady = (): void => {
        if (!isLoading) SplashScreen.hideAsync();
    };

    return isLoading ? null : (
        <Suspense fallback={<></>}>
            <Providers>
                <Navigator onReady={handleNavigatorReady} />
            </Providers>
        </Suspense>
    );
};

export default App;

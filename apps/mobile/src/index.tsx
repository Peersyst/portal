// Load polyfills
import "@/common/polyfills";

// Load OpenApi config
import "@/data-access/api/OpenApiConfig";

// Set up domain
import "@/domain/setup";

// Load locale
import "@/ui/locale";

import { Suspense } from "react";
import Providers from "@/ui/Providers";
import Navigator from "@/ui/navigator/Navigator";
import { useInit } from "@/ui/common/hooks/useInit";
import { Platform, UIManager, LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";

//Explanation link :https://github.com/facebook/react-native/issues/12981#issuecomment-652745831
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

import { useEffect, useState } from "react";
import ControllerFactory from "../../adapter/ControllerFactory";
import { i18nextInitializationPromise } from "ui/locale";
import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";

export function useLoad(): boolean {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            // Load fonts
            const loadFontsPromise = Font.loadAsync({
                ...FontAwesome.font,
                "space-mono": require("../../../../assets/fonts/SpaceMono-Regular.ttf"),
            });

            const loadCountPromise = ControllerFactory.counterController.loadCount();

            await Promise.all([loadCountPromise, i18nextInitializationPromise, loadFontsPromise]);

            setLoading(false);
        })();
    }, []);

    return loading;
}

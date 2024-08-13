import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import { i18nextInitializationPromise } from "@/ui/locale";

export function useLoad(): boolean {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async function () {
            // Load fonts
            const loadFontsPromise = Font.loadAsync({
                ...FontAwesome.font,
            });

            await Promise.all([i18nextInitializationPromise, loadFontsPromise]);

            setLoading(false);
        })();
    }, []);
    return loading;
}

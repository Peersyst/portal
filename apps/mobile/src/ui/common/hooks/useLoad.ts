import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect, useRef, useState } from "react";
import { loadFactories } from "../utils/factories/loadFactories";
import { configManager } from "@/common/config";

export function useLoad(areFactoriesInitialized: boolean): boolean {
    const { isConnected } = useNetInfo();

    const [isLoaded, setIsLoaded] = useState(false);
    const previousIsConnectedRef = useRef(false);
    const loadingRef = useRef(false);
    const loadFactoriesCleanupRef = useRef<() => void>();

    async function load() {
        loadingRef.current = true;

        try {
            await configManager.reload();
        } catch (_) {
            // Should not happen since the app is connected and all the keys are defined
            // However, if it happens, it can be ignored and use the previous stored config
        }

        if (loadFactoriesCleanupRef.current) loadFactoriesCleanupRef.current();
        loadFactoriesCleanupRef.current = await loadFactories();
    }

    useEffect(() => {
        if (areFactoriesInitialized && !previousIsConnectedRef.current && isConnected === true && !loadingRef.current) {
            load()
                .then(() => {
                    previousIsConnectedRef.current = true;
                    setIsLoaded(true);
                })
                .finally(() => {
                    loadingRef.current = false;
                });
        } else if (isConnected === false && previousIsConnectedRef.current) {
            previousIsConnectedRef.current = false;
        }
    }, [isConnected, areFactoriesInitialized]);

    return isLoaded;
}

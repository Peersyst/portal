import { useEffect, useRef, useState } from "react";
import { loadFactories } from "../utils/factories/loadFactories";
import { configManager } from "@/common/config";

export function useLoad(areFactoriesInitialized: boolean): boolean {
    const [isLoaded, setIsLoaded] = useState(false);
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
        if (areFactoriesInitialized && !loadingRef.current) {
            load()
                .then(() => {
                    setIsLoaded(true);
                })
                .finally(() => {
                    loadingRef.current = false;
                });
        }
    }, [areFactoriesInitialized]);

    return isLoaded;
}

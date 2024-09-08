import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect, useRef, useState } from "react";
import { loadFactories } from "@frontend/core/common/utils/factories";
import { configManager } from "../../core/config";
import { ServiceFactory } from "../../core/data-access/factories/service.factory";
import { RepositoryFactory } from "../../core/data-access/factories/repository.factory";
import { ControllerFactory } from "../../core/domain/factories/controller.factory";

/**
 * Hook used to load the app.
 * It waits for the config and the state manager to be initialized and then initializes the factories.
 * @param areFactoriesInitialized `true` if the factories are initialized, `false` otherwise.
 * @returns `true` if the app is loaded, `false` otherwise.
 */
export function useLoad(areFactoriesInitialized: boolean): boolean {
    const { isConnected } = useNetInfo();

    const [isLoaded, setIsLoaded] = useState(false);
    const previousIsConnectedRef = useRef(false);
    const loadingRef = useRef(false);
    const loadFactoriesCleanupRef = useRef<() => void>();

    async function load(): Promise<void> {
        loadingRef.current = true;

        try {
            await configManager.reload();
        } catch (_) {
            // Should not happen since the app is connected and all the keys are defined
            // However, if it happens, it can be ignored and use the previous stored config
        }

        if (loadFactoriesCleanupRef.current) loadFactoriesCleanupRef.current();
        loadFactoriesCleanupRef.current = await loadFactories(ServiceFactory, RepositoryFactory, ControllerFactory);
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

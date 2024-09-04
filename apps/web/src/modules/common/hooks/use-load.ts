import { useEffect, useRef, useState } from "react";
import { loadFactories } from "@frontend/core/common/utils/factories";
import { configManager } from "../../../config";
import { ServiceFactory } from "../../../core/data-access/factories/service.factory";
import { RepositoryFactory } from "../../../core/data-access/factories/repository.factory";
import { ControllerFactory } from "../../../core/domain/factories/controller.factory";

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
        loadFactoriesCleanupRef.current = await loadFactories(ServiceFactory, RepositoryFactory, ControllerFactory);
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

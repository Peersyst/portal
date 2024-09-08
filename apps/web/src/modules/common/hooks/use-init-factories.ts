import { useEffect, useState } from "react";
import { StateManager } from "@frontend/core/domain/state/manager";
import { initFactories } from "@frontend/core/common/utils/factories";
import { configManager } from "../../../config";
import { ServiceFactory } from "../../../core/data-access/factories/service.factory";
import { RepositoryFactory } from "../../../core/data-access/factories/repository.factory";
import { ControllerFactory } from "../../../core/domain/factories/controller.factory";

/**
 * Hook that initializes the factories.
 * It waits for the config and the state manager to be initialized and then initializes the factories.
 * @returns `true` if the factories are initialized, `false` otherwise.
 */
export function useInitFactories(): boolean {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        /**
         * onInit methods are only ran once in the app lifecycle.
         * This means that the first available config (server if online or storage if offline) will be used.
         * Thus, onInit methods should be careful when using config.
         *
         * Factories initialization should also wait for the StateManager to be initialized.
         * This means, waiting for the state manager to hydrate the states from the storage.
         * @see https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#hydration-and-asynchronous-storages
         */
        Promise.all([configManager.initialization, StateManager.initialization]).then(() => {
            initFactories(ServiceFactory, RepositoryFactory, ControllerFactory).then(() => {
                setIsInitialized(true);
            });
        });
    }, []);

    return isInitialized;
}

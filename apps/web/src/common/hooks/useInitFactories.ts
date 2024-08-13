import { useEffect, useState } from "react";
import { initFactories } from "../utils/factories/initFactories";
import { configManager } from "@/core/config";
import { StateManager } from "@frontend/core/domain/state";

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

        async function wait() {
            await StateManager.initialization;
        }

        wait();

        Promise.all([configManager.initialization, StateManager.initialization]).then(() => {
            initFactories().then(() => {
                setIsInitialized(true);
            });
        });
    }, []);

    return isInitialized;
}

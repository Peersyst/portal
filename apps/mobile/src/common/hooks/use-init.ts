import { useEffect } from "react";
import { useAppState } from "../state/app.state";
import { useInitFactories } from "./use-init-factories";
import { useLoad } from "./use-load";
import { configManager } from "../../core/config";
import { i18nextInitializationPromise } from "../../locale";

export interface UseLoadResult {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

/**
 * Hook used to initialize the app.
 * It waits for the config, the state manager and the factories to be initialized and then sets the app state to success.
 * @returns The result of the initialization.
 */
export function useInit(): UseLoadResult {
    const { isLoading, isError, isSuccess, setIsSuccess, setIsError } = useAppState();

    const areFactoriesInitialized = useInitFactories();

    useLoad(areFactoriesInitialized);

    const init = async (): Promise<void> => {
        try {
            await configManager.initialization;

            await i18nextInitializationPromise;

            setIsSuccess();
        } catch (_e) {
            setIsError();
        }
    };

    useEffect(() => {
        init();
    }, []);

    return {
        isLoading: isLoading || !areFactoriesInitialized,
        isError,
        isSuccess,
    };
}

import { useEffect } from "react";
import { i18nextInitializationPromise } from "ui/locale";
import { useAppState } from "../state/appState";
import { useInitFactories } from "./useInitFactories";
import { configManager } from "common/config";
import { useLoad } from "./useLoad";

export interface UseLoadResult {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

/**
 * Hook used to initialize the app data
 */
export function useInit(): UseLoadResult {
    const { isLoading, isError, isSuccess, setIsSuccess, setIsError } = useAppState();

    const areFactoriesInitialized = useInitFactories();

    useLoad(areFactoriesInitialized);

    const init = async () => {
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

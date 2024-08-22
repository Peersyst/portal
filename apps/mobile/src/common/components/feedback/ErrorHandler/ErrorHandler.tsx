import { PropsWithChildren, useEffect } from "react";
import { useToast } from "@peersyst/react-native-components";
import { useTranslate } from "@frontend/locale/react";
import { ReactNativeErrorEvent } from "@frontend/core/ui/error/react-native";

export const ErrorHandler = ({ children }: PropsWithChildren): JSX.Element => {
    const translateError = useTranslate("error");
    const { showToast } = useToast();

    useEffect(() => {
        const handleUiError = (event: ReactNativeErrorEvent) => {
            showToast(translateError([event.error.message as any, "somethingWentWrong"], event.error.data || {}) as string, {
                type: event.error.severity,
            });
        };

        const uiErrorSubscription = ReactNativeErrorEvent.addListener(handleUiError);

        return () => {
            ReactNativeErrorEvent.removeListener(uiErrorSubscription);
        };
    }, []);

    return <>{children}</>;
};

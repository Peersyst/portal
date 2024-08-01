import { PropsWithChildren, useEffect } from "react";
import { useTranslate } from "@peersyst/locale";
import UIErrorEvent from "ui/error/UIErrorEvent";
import { useToast } from "@peersyst/react-native-components";

const ErrorHandler = ({ children }: PropsWithChildren): JSX.Element => {
    const translateError = useTranslate("error");
    const { showToast } = useToast();

    useEffect(() => {
        const handleUiError = (event: UIErrorEvent) => {
            showToast(translateError([event.error.message as any, "somethingWentWrong"], event.error.data || {}) as string, {
                type: event.error.severity,
            });
        };

        const uiErrorSubscription = UIErrorEvent.addListener(handleUiError);

        return () => {
            UIErrorEvent.removeListener(uiErrorSubscription);
        };
    }, []);

    return <>{children}</>;
};

export default ErrorHandler;

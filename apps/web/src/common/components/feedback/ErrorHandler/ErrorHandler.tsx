import { useToast } from "@peersyst/react-components";
import { PropsWithChildren, useEffect } from "react";
import UIErrorEvent from "@/error/UIErrorEvent";
import { useTranslate } from "@frontend/locale/react";

const ErrorHandler = ({ children }: PropsWithChildren): JSX.Element => {
    const translateError = useTranslate("error");
    const { showToast } = useToast();

    useEffect(() => {
        const handleUiError = (event: UIErrorEvent) => {
            showToast(translateError([event.error.message as any, "somethingWentWrong"], event.error.data || {}) as string, {
                type: event.error.severity,
            });
        };

        UIErrorEvent.addListener(handleUiError);

        return () => {
            UIErrorEvent.removeListener(handleUiError);
        };
    }, []);

    return <>{children}</>;
};

export default ErrorHandler;

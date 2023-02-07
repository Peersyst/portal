import { useToast } from "@peersyst/react-components";
import { PropsWithChildren, useEffect } from "react";
import useTranslate from "ui/locale/hooks/useTranslate";
import UIErrorEvent from "ui/error/UIErrorEvent";

const ErrorHandler = ({ children }: PropsWithChildren): JSX.Element => {
    const translateError = useTranslate("error");
    const { showToast } = useToast();

    useEffect(() => {
        const handleUiError = (event: UIErrorEvent) => {
            showToast(translateError([event.error.message as any, "somethingWentWrong"]), { type: event.error.severity });
        };

        UIErrorEvent.addListener(handleUiError);

        return () => {
            UIErrorEvent.removeListener(handleUiError);
        };
    }, []);

    return <>{children}</>;
};

export default ErrorHandler;

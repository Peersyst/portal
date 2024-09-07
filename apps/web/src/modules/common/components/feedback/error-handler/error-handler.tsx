import { useToast } from "@frontend/design-system-react/toast";
import { PropsWithChildren, useEffect } from "react";
import { useTranslate } from "@frontend/locale/react";
import { BrowserErrorEvent } from "@frontend/core/ui/error/browser";

export const ErrorHandler = ({ children }: PropsWithChildren): JSX.Element => {
    const translateError = useTranslate("error");
    const { showToast } = useToast();

    useEffect(() => {
        const handleUiError = (event: BrowserErrorEvent): void => {
            showToast(translateError([event.error.message as any, "somethingWentWrong"], event.error.data || {}) as string, {
                type: event.error.severity,
            });
        };

        BrowserErrorEvent.addListener(handleUiError);

        return () => {
            BrowserErrorEvent.removeListener(handleUiError);
        };
    }, []);

    return <>{children}</>;
};

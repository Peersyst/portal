import { useConfig } from "@frontend/config/react";
import { PropsWithChildren, useMemo } from "react";
import { PostHogProvider } from "posthog-js/react";

export const AnalyticsProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    const posthog = useConfig("posthog");

    const options = useMemo(() => ({ api_host: posthog.host }), [posthog]);

    return (
        <PostHogProvider apiKey={posthog.apiKey} options={options}>
            {children}
        </PostHogProvider>
    );
};

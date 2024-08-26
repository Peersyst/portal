import { useConfig } from "@frontend/config/react";
import { DSProvider as DSProviderRoot } from "@frontend/design-system-react";
import { useSettingsState } from "@frontend/settings/ui/state";
import { PropsWithChildren } from "react";

export function DSProvider({ children }: PropsWithChildren<{}>): JSX.Element {
    const { projectName, theme: themeKey } = useConfig("projectName", "theme");
    const { theme: themeMode } = useSettingsState();

    return (
        <DSProviderRoot projectName={projectName} themeKey={themeKey} themeMode={themeMode}>
            {children}
        </DSProviderRoot>
    );
}

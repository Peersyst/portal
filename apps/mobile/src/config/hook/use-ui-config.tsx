import { Config, createConfig } from "@peersyst/react-native-components";
import { useMemo } from "react";
import { config as staticUIConfig } from "../config";
import { useConfig } from "@frontend/config/react";
import { useTranslate, useLanguage } from "@frontend/locale/react";
import { useSettingsState } from "@frontend/settings/ui/state";

/**
 * Hook used to get the UI config.
 * @returns The UI config.
 */
const useUIConfig = (): Config => {
    const config = useConfig();
    const translate = useTranslate("error");
    const language = useLanguage();
    const settings = useSettingsState();

    const uiConfig: Config = useMemo(() => {
        return createConfig({
            projectName: config.projectName,
            translate,
            locale: language,
            theme: settings.theme,
            ...staticUIConfig,
        });
    }, [config, translate, language, settings.theme]);

    return uiConfig;
};

export default useUIConfig;

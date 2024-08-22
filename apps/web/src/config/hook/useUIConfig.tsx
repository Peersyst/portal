import { Config, createConfig } from "@peersyst/react-components";
import { useMemo } from "react";
import { config as staticUIConfig } from "../config";
import { useConfig } from "@frontend/config/react";
import { useTranslate, useLanguage } from "@frontend/locale/react";
import { useSettingsState } from "@frontend/settings/ui/state";

const useUIConfig = (): Config => {
    const config = useConfig();
    const translate = useTranslate();
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

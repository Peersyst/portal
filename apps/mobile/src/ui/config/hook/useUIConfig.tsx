import { Config, createConfig } from "@peersyst/react-native-components";
import { useConfig } from "@peersyst/config";
import useSettingsState from "@/ui/adapter/state/useSettingsState";
import { useMemo } from "react";
import { config as staticUIConfig } from "../config";
import { useLanguage, useTranslate } from "@peersyst/locale";

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

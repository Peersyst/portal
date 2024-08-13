import { Config, createConfig } from "@peersyst/react-components";
//import useSettingsState from "@/ui/adapter/state/useSettingsState";
import { useMemo } from "react";
import { config as staticUIConfig } from "../config";
import { useConfig } from "@frontend/config/react";
import { useTranslate, useLanguage } from "@frontend/locale/react";

const useUIConfig = (): Config => {
    const config = useConfig();
    const translate = useTranslate("error");
    const language = useLanguage();
    //const settings = useSettingsState();

    const uiConfig: Config = useMemo(() => {
        return createConfig({
            projectName: config.projectName,
            translate,
            locale: language,
            //theme: settings.theme,
            ...staticUIConfig,
        });
    }, [config, translate, language /*settings*/]);

    return uiConfig;
};

export default useUIConfig;

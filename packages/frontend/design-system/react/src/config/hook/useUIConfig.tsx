import { Config, createConfig, createTheme } from "@peersyst/react-components";
import { useMemo } from "react";
import { useTranslate, useLanguage } from "@frontend/locale/react";
import { config as staticUIConfig } from "../config";
import { defaultDarkTheme, defaultLightTheme } from "../../themes/default";

export function useUIConfig(): Config {
    const translate = useTranslate("error");
    const language = useLanguage();

    const uiConfig: Config = useMemo(() => {
        return createConfig({
            projectName: "peersyst",
            themes: {
                light: createTheme(defaultLightTheme),
                dark: createTheme(defaultDarkTheme),
            },
            translate,
            locale: language,
            // theme: settings.theme,
            ...staticUIConfig,
        });
    }, [translate, language]);

    return uiConfig;
}

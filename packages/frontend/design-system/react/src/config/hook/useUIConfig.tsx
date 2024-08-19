import { Config, createConfig, createTheme } from "@peersyst/react-components";
import { useMemo } from "react";
import { useTranslate, useLanguage } from "@frontend/locale/react";
import { config as staticUIConfig } from "../config";
import { darkTheme, lightTheme } from "../../theme/default";

export function useUIConfig(): Config {
    const translate = useTranslate("error");
    const language = useLanguage();

    const uiConfig: Config = useMemo(() => {
        return createConfig({
            projectName: "peersyst",
            themes: {
                light: createTheme(lightTheme),
                dark: createTheme(darkTheme),
            },
            translate,
            locale: language,
            // theme: settings.theme,
            ...staticUIConfig,
        });
    }, [translate, language]);

    return uiConfig;
}

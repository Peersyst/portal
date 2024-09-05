import { Config, createConfig, createTheme } from "@peersyst/react-components";
import { useMemo } from "react";
import { useTranslate, useLanguage } from "@frontend/locale/react";
import { DSConfigOptions } from "../ds.types";
import { themes } from "../../themes";
import { dsConfig } from "../ds.config";
import { deepmerge } from "@peersyst/react-utils";

/**
 * Uses de design system configuration
 * @param options The available options for the design system configuration.
 * It is important to notice that only the theme configuration can be dynamic, the rest of the configuration must be static.
 * @returns
 */
export function useDSConfig({ projectName, themeKey, themeMode, ...restConfig }: DSConfigOptions): Config {
    const translate = useTranslate("error");
    const language = useLanguage();

    const uiConfig: Config = useMemo(() => {
        const staticConfig = deepmerge(dsConfig, restConfig);
        const theme = themes[themeKey ?? "default"];

        return createConfig({
            projectName,
            themes: {
                light: createTheme(theme.light),
                dark: createTheme(theme.dark),
            },
            translate,
            locale: language,
            theme: themeMode,
            ...staticConfig,
        });
    }, [translate, language, themeKey, themeMode]);

    return uiConfig;
}

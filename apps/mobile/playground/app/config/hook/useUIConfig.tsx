import { Config, createConfig } from "@peersyst/react-native-components";
import { useMemo } from "react";
import { useLanguage, useTranslate } from "@peersyst/locale";

export function useUIConfig(): Config {
    const translate = useTranslate("error");
    const language = useLanguage();

    const uiConfig: Config = useMemo(() => {
        return createConfig({
            projectName: "playground",
            translate,
            locale: language,
            theme: "light",
        });
    }, [translate, language]);

    return uiConfig;
}

export default useUIConfig;

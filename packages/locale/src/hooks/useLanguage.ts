import { Locale } from "@base-project/common";
import { useTranslation } from "react-i18next";

export function useLanguage(): Locale {
    const { i18n } = useTranslation();

    return i18n.language as Locale;
}

import { useTranslation } from "react-i18next";
import { Locale } from "@peersyst/common";
import { useTranslate } from "@peersyst/locale";
import { useCallback, useMemo } from "react";
import { DateFormat } from "../types";
import { FORMAT_DATE_STRATEGIES } from "../constants";

export interface useFormatDateProps {
    format: DateFormat;
}

export function useFormatDate({
    format,
}: useFormatDateProps): (date?: Date | string | number | undefined, options?: Intl.DateTimeFormatOptions) => string {
    const formatDate = useMemo(() => FORMAT_DATE_STRATEGIES[format], [format]);
    const { i18n } = useTranslation();
    const translate = useTranslate();

    const finalFormatDate = useCallback(
        (date?: Date | string | number | undefined, options?: Intl.DateTimeFormatOptions) => {
            return formatDate(i18n.language as Locale, translate, date, options);
        },
        [formatDate],
    );

    return finalFormatDate;
}

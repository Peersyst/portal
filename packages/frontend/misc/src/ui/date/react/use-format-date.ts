import { useCallback, useMemo } from "react";
import { DateFormat } from "../types";
import { FORMAT_DATE_STRATEGIES } from "../constants";
import { useLanguage } from "@frontend/locale/react";

export interface useFormatDateProps {
    format: DateFormat;
}

export function useFormatDate({
    format,
}: useFormatDateProps): (date?: Date | string | number | undefined, options?: Intl.DateTimeFormatOptions) => string {
    const formatDate = useMemo(() => FORMAT_DATE_STRATEGIES[format], [format]);
    const language = useLanguage();

    const finalFormatDate = useCallback(
        (date?: Date | string | number | undefined, options?: Intl.DateTimeFormatOptions) => {
            return formatDate(language, date, options);
        },
        [formatDate],
    );

    return finalFormatDate;
}

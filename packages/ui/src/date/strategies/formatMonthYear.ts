import { capitalize } from "@peersyst/react-utils";
import { Namespace, TFunction } from "i18next";
import { TLocale } from "../types";

// Format: Month Year (e.g. November 2023)
export function formatMonthYear<T extends TLocale>(
    locale: T,
    _translate: TFunction<Namespace>,
    date: Date | string | number | undefined = new Date(),
    options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" },
) {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        let month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));

        if (month.includes(".")) {
            month = month.split(".")[0];
        }

        const year = new Intl.DateTimeFormat(locale, { year: options.year }).format(finalDate);
        return `${month} ${year}`;
    } catch (e) {
        return date?.toString() || "";
    }
}

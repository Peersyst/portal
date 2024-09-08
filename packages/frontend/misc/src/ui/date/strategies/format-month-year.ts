import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

/**
 * Formats a date to month/year (e.g. November 2023).
 * @param locale The locale.
 * @param date The date.
 * @param options The options.
 * @returns The formatted date.
 */
export function formatMonthYear<T extends TLocale>(
    locale: T,
    date: Date | string | number | undefined = new Date(),
    options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" },
): string {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        let month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));

        if (month.includes(".")) {
            month = month.split(".")[0];
        }

        const year = new Intl.DateTimeFormat(locale, { year: options.year }).format(finalDate);
        return `${month} ${year}`;
    } catch (_e) {
        return date?.toString() || "";
    }
}

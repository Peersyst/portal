import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

/**
 * Formats a date to month (e.g. November).
 * @param locale The locale.
 * @param date The date.
 * @param options The options.
 * @returns The formatted date.
 */
export function formatMonth<T extends TLocale>(
    locale: T,
    date?: Date | string | number | undefined,
    options: Intl.DateTimeFormatOptions = { month: "long" },
): string {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        const month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));
        return `${month}`;
    } catch (_e) {
        return date?.toString() || "";
    }
}

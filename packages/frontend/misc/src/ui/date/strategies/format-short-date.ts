import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

/**
 * Formats a date to short date (e.g. Mon 1 jan 2023).
 * @param locale The locale.
 * @param date The date.
 * @param options The options.
 * @returns The formatted date.
 */
export function formatShortDate<T extends TLocale>(
    locale: T,
    date?: Date | string | number | undefined,
    options: Intl.DateTimeFormatOptions = { weekday: "short", day: "2-digit", month: "short", year: "numeric" },
): string {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        const weekday = capitalize(new Intl.DateTimeFormat(locale, { weekday: options.weekday }).format(finalDate));
        const day = new Intl.DateTimeFormat(locale, { day: options.day }).format(finalDate);
        const month = new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate).toLowerCase();
        const year = new Intl.DateTimeFormat(locale, { year: options.year }).format(finalDate);
        return `${weekday} ${day} ${month} ${year}`;
    } catch (_e) {
        return date?.toString() || "";
    }
}

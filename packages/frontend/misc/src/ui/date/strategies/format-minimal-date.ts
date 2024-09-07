import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

/**
 * Formats a date to minimal date (e.g. Monday, 1 January 2023).
 * @param locale The locale.
 * @param date The date.
 * @param options The options.
 * @returns The formatted date.
 */
export function formatMinimalDate<T extends TLocale>(
    locale: T,
    date?: Date | string | number | undefined,
    options: Intl.DateTimeFormatOptions = { weekday: "long", day: "2-digit", month: "long", year: "numeric" },
): string {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        const weekday = capitalize(new Intl.DateTimeFormat(locale, { weekday: options.weekday }).format(finalDate));
        const day = new Intl.DateTimeFormat(locale, { day: options.day }).format(finalDate);
        const month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));
        const year = new Intl.DateTimeFormat(locale, { year: options.year }).format(finalDate);
        return `${weekday}, ${day} ${month} ${year}`;
    } catch (_e) {
        return date?.toString() || "";
    }
}

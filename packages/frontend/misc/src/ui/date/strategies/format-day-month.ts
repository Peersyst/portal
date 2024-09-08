import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

/**
 * Formats a date to day/month (e.g. June 11).
 * @param locale The locale.
 * @param date The date.
 * @param options The options.
 * @returns The formatted date.
 */
export function formatDayMonth<T extends TLocale>(
    locale: T,
    date: Date | string | number | undefined = new Date(),
    options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" },
): string {
    try {
        const finalDate = date === "" ? new Date() : new Date(date);

        const day = new Intl.DateTimeFormat(locale, { day: options.day }).format(finalDate);

        let month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));

        if (month.includes(".")) {
            month = month.split(".")[0];
        }

        return `${month} ${day}`;
    } catch (_e) {
        return date.toString();
    }
}

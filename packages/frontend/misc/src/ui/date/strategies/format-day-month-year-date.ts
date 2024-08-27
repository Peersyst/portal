import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

export function formatDayMonthYearDate<T extends TLocale>(
    locale: T,
    date?: Date | string | number | undefined,
    options: Intl.DateTimeFormatOptions = { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" },
) {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        const day = new Intl.DateTimeFormat(locale, { day: options.day }).format(finalDate);
        const month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));
        const year = new Intl.DateTimeFormat(locale, { year: options.year }).format(finalDate);
        return `${day}/${month}/${year}`;
    } catch (_e) {
        return date?.toString() || "";
    }
}

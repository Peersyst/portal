import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

export function formatMonth<T extends TLocale>(
    locale: T,
    date?: Date | string | number | undefined,
    options: Intl.DateTimeFormatOptions = { month: "long" },
) {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        const month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));
        return `${month}`;
    } catch (e) {
        return date?.toString() || "";
    }
}

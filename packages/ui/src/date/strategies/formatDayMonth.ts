import { capitalize } from "@peersyst/react-utils";
import { Namespace, TFunction } from "i18next";
import { TLocale } from "../types";

// Format: Day Month (e.g. June 11)
export function formatDayMonth<T extends TLocale>(
    locale: T,
    _translate: TFunction<Namespace>,
    date: Date | string | number | undefined = new Date(),
    options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" },
) {
    try {
        const finalDate = date === "" ? new Date() : new Date(date);

        const day = new Intl.DateTimeFormat(locale, { day: options.day }).format(finalDate);

        let month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));

        if (month.includes(".")) {
            month = month.split(".")[0];
        }

        return `${month} ${day}`;
    } catch (e) {
        return date.toString();
    }
}

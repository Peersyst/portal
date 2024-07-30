import { Namespace, TFunction } from "i18next";
import { capitalize } from "@peersyst/react-utils";
import { TLocale } from "../types";

// Date format: Mon 1 Jan at 14:20
export function formatDetailedDate<T extends TLocale>(
    locale: T,
    translate: TFunction<Namespace>,
    date?: Date | string | number | undefined,
    options: Intl.DateTimeFormatOptions = { weekday: "short", day: "2-digit", month: "short", year: "numeric" },
) {
    try {
        if (date === undefined || date === "") return "";
        const finalDate = new Date(date);
        const weekday = capitalize(new Intl.DateTimeFormat(locale, { weekday: options.weekday }).format(finalDate));
        const day = new Intl.DateTimeFormat(locale, { day: options.day }).format(finalDate);
        const month = capitalize(new Intl.DateTimeFormat(locale, { month: options.month }).format(finalDate));
        const hours = new Intl.DateTimeFormat(locale, { hour: "2-digit", hour12: false }).format(finalDate);
        const minutes = new Intl.DateTimeFormat(locale, { minute: "2-digit" }).format(finalDate).padStart(2, "0");

        return `${weekday} ${day} ${month} ${translate("at")} ${hours}:${minutes}`;
    } catch (e) {
        return date?.toString() || "";
    }
}

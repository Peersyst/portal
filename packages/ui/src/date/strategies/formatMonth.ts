import { capitalize } from "@peersyst/react-utils";
import { Namespace, TFunction } from "i18next";
import { TLocale } from "../types";

export function formatMonth<T extends TLocale>(
    locale: T,
    _translate: TFunction<Namespace>,
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

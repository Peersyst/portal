function formatFullDate(inputDate: Date): string {
    const weekDay = new Intl.DateTimeFormat("en", { weekday: "short" }).format(inputDate);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(inputDate);
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(inputDate);
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(inputDate);
    const hour = new Intl.DateTimeFormat("en", { hour: "2-digit", hour12: false }).format(inputDate);
    const minute = new Intl.DateTimeFormat("en", { minute: "2-digit" }).format(inputDate);
    const second = new Intl.DateTimeFormat("en", { second: "2-digit" }).format(inputDate);

    const formattedDate = `${weekDay} ${day} ${month}, ${year} (${hour}:${minute}:${second})`;

    return formattedDate;
}

function formatDefaultDate(inputDate: Date): string {
    const weekDay = new Intl.DateTimeFormat("en", { weekday: "short" }).format(inputDate);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(inputDate);
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(inputDate);
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(inputDate);

    const formattedDate = `${weekDay} ${day} ${month}, ${year}`;

    return formattedDate;
}

function formatShortDate(inputDate: Date): string {
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(inputDate);
    const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(inputDate);
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(inputDate);

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

export enum DateFormat {
    FULL = "full",
    DEFAULT = "default",
    SHORT = "short",
}

export type DateFormatStrategies = Record<DateFormat, (inputDate: Date) => string>;

export interface FormatDateOptions {
    format: DateFormat;
}

const strategies: DateFormatStrategies = {
    [DateFormat.FULL]: formatFullDate,
    [DateFormat.DEFAULT]: formatDefaultDate,
    [DateFormat.SHORT]: formatShortDate,
};

export function formatDate(inputDate: Date, options: FormatDateOptions = { format: DateFormat.DEFAULT }): string {
    const strategy = strategies[options.format];

    return strategy(inputDate);
}

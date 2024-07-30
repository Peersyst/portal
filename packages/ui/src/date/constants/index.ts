import {
    formatShortDate,
    formatMinimalDate,
    formatDetailedDate,
    formatDayMonthYearDate,
    formatDayMonth,
    formatMonth,
    formatMonthYear,
} from "../strategies";
import { DateFormat, FormatStrategy } from "../types";

export const FORMAT_DATE_STRATEGIES: Record<string, FormatStrategy["formatDate"]> = {
    [DateFormat.SHORT]: formatShortDate,
    [DateFormat.MINIMAL]: formatMinimalDate,
    [DateFormat.DETAILED]: formatDetailedDate,
    [DateFormat.DAY_MONTH_YEAR]: formatDayMonthYearDate,
    [DateFormat.DAY_MONTH]: formatDayMonth,
    [DateFormat.MONTH]: formatMonth,
    [DateFormat.MONTH_YEAR]: formatMonthYear,
};

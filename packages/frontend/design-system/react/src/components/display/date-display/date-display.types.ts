import { DateFormat } from "@frontend/misc/ui/date";
import { TypographyProps } from "@peersyst/react-components";

export type DateType = Date | string | number;
export interface DateDisplayProps extends Omit<TypographyProps, "children" | "numberOfLines"> {
    date: DateType;
    format?: DateFormat;
}

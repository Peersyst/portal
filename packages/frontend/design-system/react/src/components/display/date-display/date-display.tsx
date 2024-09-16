import { Typography } from "@peersyst/react-components";
import { DateDisplayProps } from "./date-display.types";
import { DateFormat } from "@frontend/misc/ui/date";
import { useFormatDate } from "@frontend/misc/ui/date/react";

export const DateDisplay = ({ date, format = DateFormat.DAY_MONTH_YEAR, ...typographyProps }: DateDisplayProps): JSX.Element => {
    const formatDate = useFormatDate({ format });

    return <Typography {...typographyProps}>{formatDate(date)}</Typography>;
};

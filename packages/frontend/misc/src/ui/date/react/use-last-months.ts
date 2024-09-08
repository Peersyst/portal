import { useMemo } from "react";

export interface UseLastMonthsProps {
    months?: number;
}

export interface DateRange {
    firstDay: Date;
    lastDay: Date;
}

/**
 * Hook to get the last months.
 * @param props The props.
 * @returns The last months.
 */
export function useLastMonths({ months = 12 }: UseLastMonthsProps = {}): DateRange[] {
    return useMemo(() => {
        const today = new Date();
        const result: DateRange[] = [];

        for (let i = 0; i < months; i++) {
            const month = i > today.getMonth() ? i % 12 : today.getMonth() - i;
            const year = i > today.getMonth() ? today.getFullYear() - Math.floor(i / 12 + 1) : today.getFullYear();

            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);

            result.push({ firstDay, lastDay });
        }
        return result;
    }, [months]);
}

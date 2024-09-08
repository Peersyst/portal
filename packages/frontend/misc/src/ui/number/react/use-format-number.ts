import { useTranslate } from "@frontend/locale/react";

/**
 * Hook to format numbers.
 * @param options Number format options.
 * @returns The formatted number.
 */
export function useFormatNumber(options: Intl.NumberFormatOptions = {}): (n: number | string) => string {
    const translate = useTranslate();

    return (n: number | string): string => {
        return translate("number", {
            val: n,
            ...options,
        });
    };
}

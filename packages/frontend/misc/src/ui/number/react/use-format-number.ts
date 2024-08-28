import { useTranslate } from "@frontend/locale/react";

/**
 * Hook to format numbers
 * @param n Number to format
 * @param options Number format options
 */
export function useFormatNumber(options: Intl.NumberFormatOptions = {}) {
    const translate = useTranslate();

    return (n: number | string) => {
        return translate("number", {
            val: n,
            ...options,
        });
    };
}

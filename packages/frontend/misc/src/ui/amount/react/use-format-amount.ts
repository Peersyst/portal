import { useConfig } from "@frontend/config/react";
import { useTranslate } from "@frontend/locale/react";
import Amount from "@shared/amount";

export interface UseFormatAmountParams<ToParts extends boolean = false> {
    maxDecimals?: number;
    minDecimals?: number;
    toParts?: ToParts;
}

export type FormatAmountParts = {
    amount: string;
    currency: string;
};

export type FormatAmountResult<ToParts extends boolean = false> = ToParts extends true ? FormatAmountParts : string;

/**
 * Returns a function that formats an amount according to the current locale.
 * @returns A function that formats an amount according to the current locale.
 */
export function useFormatAmount(): <ToParts extends boolean = false>(
    amount: Amount,
    params?: UseFormatAmountParams<ToParts>,
) => FormatAmountResult<ToParts> {
    const translate = useTranslate();
    const maxNumberDecimals = useConfig("maxNumberDecimals");

    const formatAmount = <ToParts extends boolean = false>(
        amount: Amount,
        { maxDecimals = maxNumberDecimals, minDecimals = 0, toParts = false as ToParts }: UseFormatAmountParams<ToParts> = {},
    ): FormatAmountResult<ToParts> => {
        const formattedAmount = translate("formatNumber", {
            val: amount.formatAmount(),
            maximumFractionDigits: maxDecimals,
            minimumFractionDigits: minDecimals,
        });
        return (
            toParts ? { amount: formattedAmount, currency: amount.currency } : `${formattedAmount} ${amount.currency}`
        ) as FormatAmountResult<ToParts>;
    };
    return formatAmount;
}

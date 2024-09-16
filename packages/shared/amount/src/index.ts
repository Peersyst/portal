import { decimalToInt, intToDecimal } from "@shared/number";
import BigNumber from "bignumber.js";

export default class Amount {
    /**
     * Amount as integer
     */
    amount: string;
    /**
     * Amount decimals
     */
    decimals: number;
    /**
     * Amount currency
     */
    currency: string;

    constructor(amount: string, decimals: number, currency: string) {
        this.amount = amount;
        this.decimals = decimals;
        this.currency = currency;
    }

    /**
     * Converts the amount to an integer.
     * @param amount The amount as a string or number.
     * @returns The amount as an integer.
     */
    private toAmountFormat(amount: string | number): string {
        return decimalToInt(amount, this.decimals);
    }

    /**
     * Formats the amount with decimals.
     * @returns The formatted amount.
     */
    formatAmount(): string {
        return intToDecimal(this.amount, this.decimals);
    }

    /**
     * Checks if the amount is greater than the payment.
     * @param payment Amount to pay with decimals.
     * @returns If the amount is greater than the payment.
     */
    canPay(payment: string | number): boolean {
        return BigNumber(this.amount).gte(BigNumber(this.toAmountFormat(payment)));
    }

    /**
     * Adds the amount to the current amount.
     * @param amount Amount to add as an integer in string format.
     * @returns A new Amount instance.
     */
    plus(amount: string | Amount): Amount {
        const value = amount instanceof Amount ? amount.amount : amount;
        return new Amount(BigNumber(this.amount).plus(BigNumber(value)).toString(), this.decimals, this.currency);
    }

    /**
     * Subtracts the amount to the current amount.
     * @param amount Amount to subtract as an integer in string format or an `Amount`.
     * @returns A new Amount instance.
     */
    minus(amount: string | Amount): Amount {
        const value = amount instanceof Amount ? amount.amount : amount;
        return new Amount(BigNumber(this.amount).minus(BigNumber(value)).toString(), this.decimals, this.currency);
    }

    /**
     * Compares if the amount is greater than the given amount.
     * @param amount Amount to compare as an integer in string format or an `Amount`.
     * @returns If the amount is greater than the given amount.
     */
    gt(amount: string | Amount): boolean {
        const value = amount instanceof Amount ? amount.amount : amount;
        return BigNumber(this.amount).gt(BigNumber(value));
    }

    /**
     * Compares if the amount is greater than or equal to the given amount.
     * @param amount Amount to compare as an integer in string format or an `Amount`.
     * @returns If the amount is greater than or equal to the given amount.
     */
    gte(amount: string | Amount): boolean {
        const value = amount instanceof Amount ? amount.amount : amount;
        return BigNumber(this.amount).gte(BigNumber(value));
    }

    /**
     * Compares if the amount is lower than the given amount.
     * @param amount Amount to compare as an integer in string format or an `Amount`.
     * @returns If the amount is lower than the given amount.
     */
    lt(amount: string | Amount): boolean {
        const value = amount instanceof Amount ? amount.amount : amount;
        return BigNumber(this.amount).gt(BigNumber(value));
    }

    /**
     * Compares if the amount is lower than or equal to the given amount.
     * @param amount Amount to compare as an integer in string format or an `Amount`.
     * @returns If the amount is lower than or equal to the given amount.
     */
    lte(amount: string | Amount): boolean {
        const value = amount instanceof Amount ? amount.amount : amount;
        return BigNumber(this.amount).gte(BigNumber(value));
    }

    /**
     * Compares if the amount equals to the given amount.
     * @param amount Amount to compare as an integer in string format or an `Amount`.
     * @returns If the amount is equal to the given amount.
     */
    eq(amount: string | Amount): boolean {
        const value = amount instanceof Amount ? amount.amount : amount;
        return BigNumber(this.amount).eq(BigNumber(value));
    }

    /**
     * Creates an Amount from an integer amount.
     * @param amount The amount as a string integer.
     * @param decimals The amount decimals.
     * @param currency The currency.
     * @returns An Amount instance.
     */
    static fromInt(amount: string, decimals: number, currency: string): Amount {
        return new Amount(amount, decimals, currency);
    }

    /**
     * Creates an Amount from a decimal amount.
     * @param amount The amount as a string with decimals.
     * @param decimals The amount decimals.
     * @param currency The currency.
     * @returns An Amount instance.
     */
    static fromDec(amount: string, decimals: number, currency: string): Amount {
        return new Amount(decimalToInt(amount, decimals), decimals, currency);
    }
}

import { registerDecorator, ValidationOptions } from "class-validator";
import isISO4217Validator from "validator/lib/isISO4217";

export const IS_VALID_CURRENCY_CODE = "isValidCurrencyCode";

/**
 * Check if the string is a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) officially assigned currency code.
 */
export function isISO4217CurrencyCode(value: string): boolean {
    return isISO4217Validator(value);
}

/**
 * Check if the string is a valid 160-bit hex. The first 8 bits MUST NOT BE 0x00.
 * [View more](https://xrpl.org/currency-formats.html#nonstandard-currency-codes)
 */
export function isNonStandardCurrencyCode(value: string): boolean {
    return /^[a-fA-F0-9]{40}$/.test(value) && !value.startsWith("00");
}

/**
 * Decorator that checks if a given value is a valid [currency code](https://xrpl.org/currency-formats.html#currency-codes)
 * supported by the [HTTP / Websocket API](https://xrpl.org/http-websocket-apis.html)
 */
export function IsValidCurrencyCode(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: IS_VALID_CURRENCY_CODE,
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any): boolean {
                    try {
                        return typeof value === "string" && (isISO4217CurrencyCode(value) || isNonStandardCurrencyCode(value));
                    } catch (e) {
                        return false;
                    }
                },
                defaultMessage() {
                    return "$value is not a valid currency code";
                },
            },
        });
    };
}

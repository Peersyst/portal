/**
 * Checks if an error is an insufficient create account amount error.
 * @param error The error to check.
 * @returns True if the error is an insufficient create account amount error, false otherwise.
 */
export function isInsufficientCreateAccountAmountError(error: any): boolean {
    return (
        error instanceof Error &&
        /Tried to transfer \b.+\b from \b.+\b to \b.+\b but the amount provided \(.+\) is lower than the `minAccountCreate` \(.+\) of the origin bridge door \(.+\)./.test(
            error.message,
        )
    );
}

/**
 * Checks if an error is an destination cannot pay signature reward error.
 * @param error The error to check.
 * @returns True if the error is an destination cannot pay signature reward error, false otherwise.
 */
export function isDestinationCannotPaySignatureRewardError(error: any): boolean {
    return (
        error instanceof Error &&
        /Tried to transfer \b.+\b from \b.+\b to \b.+\b but the destination does not have enough funds to pay the `signatureReward` \(.+\) of the destination bridge door \(.+\). Beware that the `signatureReward` is paid in the destination bridge door native currency./.test(
            error.message,
        )
    );
}

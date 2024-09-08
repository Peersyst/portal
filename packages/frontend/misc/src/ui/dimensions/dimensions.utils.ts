/**
 * Converts pixels to rem.
 * @param px The pixels.
 * @returns The rem.
 */
export function pxToRem(px: number): string {
    return `${px / 16}rem`;
}

/**
 * Converts rem to pixels.
 * @param rem The rem.
 * @returns The pixels.
 */
export function remToPx(rem: number): string {
    return `${rem * 16}px`;
}

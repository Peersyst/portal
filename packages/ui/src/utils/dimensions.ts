export function pxToRem(px: number): string {
    return `${px / 16}rem`;
}
export function remToPx(rem: number): string {
    return `${rem * 16}px`;
}

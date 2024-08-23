import { Font, FontVariants, FontWeight } from "./typography.types";

export function createFont<V extends FontVariants, W extends FontWeight[], P extends string | undefined>(
    font: Font<V, W, P>,
): Font<V, W, P> {
    return font;
}

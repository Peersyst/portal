import { Properties as CSSProperties, Pseudos as CSSPseudos } from "csstype";
import { FONT_WEIGHT } from "./typography.constants";
import { Font, FontWeight, TypographyVariants } from "./typography.types";
import { capitalize } from "@shared/string";

export type TypographyCSSPseudosObject = { [K in CSSPseudos]?: TypographyCSSObject };
export interface TypographyCSSObject extends CSSProperties, TypographyCSSPseudosObject {
    [key: string]: TypographyCSSObject | string | number | undefined;
}

export function createTypographyStyle(variantStyles: CSSProperties, fontFamily: string, fontWeight: FontWeight) {
    return {
        ...variantStyles,
        fontFamily,
        fontWeight: FONT_WEIGHT[fontWeight],
    };
}

export function createTypographyObjectVariant(variant: string, variantStyles: CSSProperties, fontFamily: string, fontWeight: FontWeight) {
    return {
        component: variant[0] === "h" ? variant : "p",
        style: createTypographyStyle(variantStyles, fontFamily, fontWeight),
    };
}

function createTypographyVariant<F extends Font>(font: F): Record<string, { component: string; style: TypographyCSSObject }> {
    const variants: Record<string, { component: string; style: TypographyCSSObject }> = {};

    for (const [variant, variantStyles] of Object.entries(font.variants)) {
        for (const fontWeight of font.weights) {
            const variantKey = font.prefix
                ? `${font.prefix}${capitalize(variant)}${capitalize(fontWeight)}`
                : `${variant}${capitalize(fontWeight)}`;
            variants[variantKey] = createTypographyObjectVariant(variant, variantStyles, font.family, fontWeight);
        }
    }

    return variants;
}

export function createTypographyVariants<Fonts extends Readonly<Array<Font<any, any, any>>>>(
    fonts: Fonts,
): Record<TypographyVariants<Fonts>, { component: string; style: TypographyCSSObject }> {
    const variants = {} as Record<TypographyVariants<Fonts>, { component: string; style: TypographyCSSObject }>;

    for (const font of Object.values(fonts)) {
        Object.assign(variants, createTypographyVariant(font as Font));
    }

    return variants;
}

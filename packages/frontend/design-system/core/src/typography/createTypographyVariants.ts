import { Properties as CSSProperties, Pseudos as CSSPseudos } from "csstype";
import { FONT_WEIGHT } from "./typography.constants";
import { Font, FontVariantDef, FontWeight, TypographyVariants } from "./typography.types";
import { capitalize } from "@shared/string";

export type TypographyCSSPseudosObject = { [K in CSSPseudos]?: TypographyCSSObject };
export interface TypographyCSSObject extends CSSProperties, TypographyCSSPseudosObject {
    [key: string]: TypographyCSSObject | string | number | undefined;
}

/**
 * Creates a typography style.
 * @param variantStyles The styles for the variant.
 * @param fontFamily The font family.
 * @param fontWeight The font weight.
 * @returns The typography style.
 */
export function createTypographyStyle(variantStyles: CSSProperties, fontFamily: string, fontWeight: FontWeight): TypographyCSSObject {
    return {
        ...variantStyles,
        fontFamily,
        fontWeight: FONT_WEIGHT[fontWeight],
    };
}

/**
 * Creates a typography object variant.
 * @param variant The variant.
 * @param variantDef The styles for the variant.
 * @param fontFamily The font family.
 * @param fontWeight The font weight.
 * @returns The typography object variant.
 */
export function createTypographyObjectVariant(
    variant: string,
    variantDef: FontVariantDef,
    fontFamily: string,
    fontWeight: FontWeight,
): { component: string; style: TypographyCSSObject } {
    return {
        component: variantDef.component ?? (variant[0] === "h" ? variant : "p"),
        style: createTypographyStyle(variantDef, fontFamily, fontWeight),
    };
}

/**
 * Creates a typography variant.
 * @param font The font.
 * @returns The typography variant.
 */
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

/**
 * Creates the typography variants.
 * @param fonts The fonts.
 * @returns The typography variants.
 */
export function createTypographyVariants<Fonts extends Readonly<Array<Font<any, any, any>>>>(
    fonts: Fonts,
): Record<TypographyVariants<Fonts>, { component: string; style: TypographyCSSObject }> {
    const variants = {} as Record<TypographyVariants<Fonts>, { component: string; style: TypographyCSSObject }>;

    for (const font of Object.values(fonts)) {
        Object.assign(variants, createTypographyVariant(font as Font));
    }

    return variants;
}

import { Properties as CSSProperties } from "csstype";
import { BASE_TYPOGRAPHY_VARIANTS, FONT_WEIGHTS } from "./typography.constants";

// TODO: Create @swisstype/array and @swisstype/math
// @see https://medium.com/@taitasciore/arithmetic-operations-in-the-typescript-type-system-because-why-not-cfc2253a93c9
/**
 * All possible iterations for a recursive type
 */
type MaxRecursiveIterations = 10;
// prettier-ignore
type Iterations = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export type CreateArrayOfLength<T extends number, U extends unknown[] = []> = CoreCreateArrayOfLength<T, U>;
export type CoreCreateArrayOfLength<T extends number, U extends unknown[] = [], I extends number = MaxRecursiveIterations> = I extends 0
    ? U
    : U["length"] extends T
    ? U
    : CoreCreateArrayOfLength<T, [...U, U["length"]], Iterations[I]>;

export type TypographyVariantKey = (typeof BASE_TYPOGRAPHY_VARIANTS)[number];

export type FontWeight = (typeof FONT_WEIGHTS)[number];

export type FontVariants = Partial<Record<TypographyVariantKey, CSSProperties>>;

export type Font<V extends FontVariants = FontVariants, W extends FontWeight[] = FontWeight[], P extends string | undefined = undefined> = {
    family: string;
    prefix?: P;
    variants: V;
    weights: W;
};

export type TypographyVariant<F extends Font<any, any, any>> = F["prefix"] extends undefined
    ? `${Exclude<keyof F["variants"], number | symbol>}${Capitalize<F["weights"][number]>}`
    : `${Exclude<F["prefix"], undefined>}${Capitalize<Exclude<keyof F["variants"], number | symbol>>}${Capitalize<F["weights"][number]>}`;

export type FontsIterationsArray<Fonts extends Readonly<Array<Font<any, any, any>>>> = CreateArrayOfLength<Fonts["length"]>;

export type TypographyVariants<Fonts extends Readonly<Array<Font<any, any, any>>>> = {
    [K in FontsIterationsArray<Fonts>[number]]: TypographyVariant<Fonts[K]>;
}[FontsIterationsArray<Fonts>[number]];

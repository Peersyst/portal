export const BASE_TYPOGRAPHY_VARIANTS = [
    "h1",
    "h2",
    "title1",
    "title2",
    "title3",
    "title4",
    "body1",
    "body2",
    "body3",
    "body4",
    "caption",
] as const;

export const FONT_WEIGHTS = ["light", "regular", "medium", "semibold", "bold", "heavy"] as const;

export const FONT_WEIGHT: Record<(typeof FONT_WEIGHTS)[number], number> = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 900,
};

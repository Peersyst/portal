export const BASE_TYPOGRAPHY_VARIANTS = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "heading",
    "body1",
    "body2",
    "caption1",
    "caption2",
    "caption3",
] as const;

export const FONT_WEIGHTS = ["thin", "extraLight", "light", "regular", "medium", "semibold", "bold", "extraBold", "black"] as const;

export const FONT_WEIGHT: Record<(typeof FONT_WEIGHTS)[number], number> = {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
};

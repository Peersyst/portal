import { createFont } from "@frontend/design-system-core/typography";

const mainFont = createFont({
    family: "Montserrat",
    prefix: undefined,
    variants: {
        h1: { fontSize: "3rem", lineHeight: "4rem" },
        h2: { fontSize: "2rem", lineHeight: "3rem" },
        title1: { fontSize: "1.75rem", lineHeight: "2.375rem" },
        title2: { fontSize: "1.625rem", lineHeight: "2.125rem" },
        title3: { fontSize: "1.5rem", lineHeight: "2rem" },
        title4: { fontSize: "1.25rem", lineHeight: "2rem" },
        body1: { fontSize: "1.125rem", lineHeight: "1.75rem" },
        body2: { fontSize: "1rem", lineHeight: "1.75rem" },
        body3: { fontSize: "0.875rem", lineHeight: "1.5rem" },
        body4: { fontSize: "0.75rem", lineHeight: "1.125rem" },
        caption: { fontSize: "0.625rem", lineHeight: "0.75rem" },
    },
    weights: ["regular", "semibold", "bold"],
});

export const fonts = [mainFont] as const;

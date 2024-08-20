export type Locale = "es" | "en" | "ca";

export type Theme = "light" | "dark";

export interface Settings {
    locale?: Locale;
    theme?: Theme;
}

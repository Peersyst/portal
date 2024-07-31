export default function getBrowserLocale(): string {
    if (typeof window === "undefined") {
        return "en";
    }

    return window.navigator.language || "en";
}

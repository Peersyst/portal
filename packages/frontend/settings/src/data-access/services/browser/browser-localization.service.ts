export class BrowserLocalizationService {
    private getBrowserLocale(): string {
        if (typeof window === "undefined") {
            return "en";
        }

        return window.navigator.language;
    }

    getLocale(): string {
        return this.getBrowserLocale() || "en";
    }
}

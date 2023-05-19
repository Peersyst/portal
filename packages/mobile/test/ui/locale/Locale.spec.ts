import { resources } from "ui/locale/i18n";

describe("Test for the locales", () => {
    test("All locales have the same keys", () => {
        const { en, ...otherResources } = resources;
        const languages = Object.values(otherResources);

        const namespaces = Object.entries(en);

        for (const translations of languages) {
            // Check equal namespaces
            expect(Object.keys(translations)).toEqual(namespaces.map(([key]) => key));

            // For each translation, check equal keys
            for (const [key, values] of namespaces) {
                expect(Object.keys(translations[key as keyof typeof translations])).toEqual(Object.keys(values));
            }
        }
    });
});

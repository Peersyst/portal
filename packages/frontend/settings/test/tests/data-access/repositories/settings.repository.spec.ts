import { Settings } from "../../../../src/common/types";
import { SettingsRepository } from "../../../../src/data-access/repositories/settings.repository";
import { StorageMock } from "@frontend/core/mocks/data-access/repository";

describe("SettingsRepository", () => {
    let settingsRepository: SettingsRepository;

    const storageMock = new StorageMock();

    beforeEach(() => {
        settingsRepository = new SettingsRepository(storageMock);
    });

    describe("getSettings", () => {
        it("should return the settings", () => {
            const settings: Settings = { locale: "en" };
            storageMock.getItem.mockReturnValue(settings);

            expect(settingsRepository.getSettings()).resolves.toEqual(settings);
        });
    });

    describe("setSettings", () => {
        it("should set the settings", () => {
            const settings: Settings = { locale: "en" };
            storageMock.setItem.mockReturnValue(settings);

            expect(settingsRepository.setSettings(settings)).resolves.toEqual(settings);
        });
    });

    describe("getLocale", () => {
        it("should return the locale", () => {
            const settings: Settings = { locale: "en" };
            storageMock.getItem.mockReturnValue(settings);

            expect(settingsRepository.getLocale()).resolves.toEqual(settings.locale);
        });
    });

    describe("setLocale", () => {
        it("should set the locale", () => {
            const locale = "en";
            storageMock.setItem.mockReturnValue(locale);

            expect(settingsRepository.setLocale(locale)).resolves.toEqual(locale);
        });
    });
});

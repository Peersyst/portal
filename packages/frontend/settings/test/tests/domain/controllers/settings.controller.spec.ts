import { MethodMock } from "@shared/test";
import { SettingsController } from "../../../../src/domain/controllers";
import { SettingsMock } from "../../../mocks/common";
import { SettingsRepositoryMock } from "../../../mocks/data-access/repositories";
import { LocalizationServiceMock } from "../../../mocks/data-access/service/localization.service.mock";
import { SettingsStateMock } from "../../../mocks/domain/settings.state.mock";

describe("SettingsController", () => {
    let settingsController: SettingsController;

    const settingsMock = new SettingsMock();

    const settingsRepositoryMock = new SettingsRepositoryMock({
        getSettings: new MethodMock("mockResolvedValue", settingsMock),
        getLocale: new MethodMock("mockResolvedValue", settingsMock.locale),
    });
    const localizationServiceMock = new LocalizationServiceMock();
    const settingsStateMock = new SettingsStateMock({
        getState: new MethodMock("mockReturnValue", settingsMock),
    });

    beforeEach(() => {
        settingsRepositoryMock.clearMocks();
        localizationServiceMock.clearMocks();
        settingsStateMock.clearMocks();

        settingsController = new SettingsController(settingsRepositoryMock, localizationServiceMock, settingsStateMock);
    });

    describe("getSettings", () => {
        it("should return settings from repository", async () => {
            const settings = await settingsController.getSettings();

            expect(settings).toEqual(settingsMock);
        });
    });

    describe("setSettings", () => {
        it("should set settings in state and repository", async () => {
            await settingsController.setSettings(settingsMock);

            expect(settingsStateMock.setState).toHaveBeenCalledWith(settingsMock);
            expect(settingsRepositoryMock.setSettings).toHaveBeenCalledWith(settingsMock);
        });
    });

    describe("getLocale", () => {
        it("should return locale from repository", async () => {
            const locale = await settingsController.getLocale();

            expect(locale).toEqual(settingsMock.locale);
        });

        it("should return locale from localization service if repository returns undefined", async () => {
            const localizationServiceLocale = "ca";
            settingsRepositoryMock.getLocale.mockResolvedValueOnce(undefined);
            localizationServiceMock.getLocale.mockReturnValueOnce(localizationServiceLocale);

            const locale = await settingsController.getLocale();

            expect(locale).toEqual(localizationServiceLocale);
        });

        it("should return en if locale is not supported", async () => {
            settingsRepositoryMock.getLocale.mockResolvedValueOnce(undefined);
            localizationServiceMock.getLocale.mockReturnValueOnce("unsupported");

            const locale = await settingsController.getLocale();

            expect(locale).toEqual("en");
        });
    });

    describe("setLocale", () => {
        it("should set locale in state and repository", async () => {
            const locale = "ca";

            await settingsController.setLocale(locale);

            expect(settingsStateMock.setState).toHaveBeenCalledWith({ locale });
            expect(settingsRepositoryMock.setLocale).toHaveBeenCalledWith(locale);
        });
    });
});

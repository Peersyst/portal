import { createMock, MethodMock } from "@shared/test";
import { SettingsController } from "../../../../src/domain/controllers/settings.controller";
import { SettingsMock } from "../../common/settings.mock";
import { SettingsStateMock } from "../settings.state.mock";

const settingsMock = new SettingsMock();

export const SettingsControllerMock = createMock<SettingsController>({
    settingsState: new SettingsStateMock(),
    getSettings: new MethodMock("mockResolvedValue", settingsMock),
    setSettings: new MethodMock("mockResolvedValue"),
    getLocale: new MethodMock("mockResolvedValue", settingsMock.locale),
    setLocale: new MethodMock("mockResolvedValue"),
});

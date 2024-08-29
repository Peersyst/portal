import { State } from "@frontend/core/domain/state";
import { createMock, MethodMock } from "@shared/test";
import { ISettingsState } from "../../../src/domain/settings.state";
import { SettingsMock } from "../common/settings.mock";

export const SettingsStateMock = createMock<State<ISettingsState>>({
    setState: new MethodMock("mockReturnValue"),
    getState: new MethodMock("mockReturnValue", new SettingsMock()),
    subscribe: new MethodMock("mockReturnValue"),
    reset: new MethodMock("mockReturnValue"),
});

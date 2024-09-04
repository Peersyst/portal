import { createGlobalMock, MethodMock } from "@shared/test";
import * as UseSettingsState from "../../../../src/ui/state/use-settings-state";
import { SettingsStateMock } from "../../domain/settings.state.mock";

export const UseSettingsStateMock = createGlobalMock(UseSettingsState, {
    useSettingsState: new MethodMock("mockReturnValue", new SettingsStateMock()),
});

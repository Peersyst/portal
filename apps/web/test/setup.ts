import "../src/common/polyfills";

import { jest as baseJest } from "@jest/globals";

const globalJest = baseJest as unknown as typeof jest;
globalJest.mockModule = baseJest.unstable_mockModule;
global.jest = globalJest;

jest.mockModule("@peersyst/common", () => ({
    ...(jest.requireActual("@peersyst/common") as any),
    withRetries: (fn: () => any) => fn(),
}));

// Use require.resolve to force the module to be resolved using the CSJ entry point. Otherwise, jest cannot transform ESM.
jest.mockModule("@aws-sdk/client-appconfigdata", () => require.resolve("@aws-sdk/client-appconfigdata"));

jest.mockModule("../src/common/config", () => {
    const { ConfigManagerMock } = require("./mocks/config/ConfigManager.mock");

    return {
        configManager: new ConfigManagerMock(),
    };
});

jest.mockModule("@peersyst/domain", () => {
    return {
        __esModule: true,
        ...(jest.requireActual("@peersyst/domain") as any),
    };
});

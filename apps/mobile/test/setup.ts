import "@/common/polyfills";

jest.mock("@peersyst/common", () => ({
    ...jest.requireActual("@peersyst/common"),
    withRetries: (fn: () => any) => fn(),
}));

// Use require.resolve to force the module to be resolved using the CSJ entry point. Otherwise, jest cannot transform ESM.
jest.mock("@aws-sdk/client-appconfigdata", () => require.resolve("@aws-sdk/client-appconfigdata"));

jest.mock("@/common/config", () => {
    const { ConfigManagerMock } = require("./mocks/config/ConfigManager.mock");

    return {
        configManager: new ConfigManagerMock(),
    };
});

jest.mock("@peersyst/domain", () => {
    return {
        __esModule: true,
        ...jest.requireActual("@peersyst/domain"),
    };
});

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Load polyfills
import "@/core/polyfills";

// Set up data access
import "@/core/data-access/setup";

// Set up domain
import "@/core/domain/setup";

// Set jest global
import { jest as baseJest } from "@jest/globals";
const globalJest = baseJest as unknown as typeof jest;
globalJest.mockModule = baseJest.unstable_mockModule;
global.jest = globalJest;

// Mock `withRetries` to avoid retries in tests
jest.mockModule("@shared/utils", () => ({
    ...(jest.requireActual("@shared/utils") as any),
    withRetries: (fn: () => any) => fn(),
}));

// Use require.resolve to force the module to be resolved using the CSJ entry point. Otherwise, jest cannot transform ESM.
jest.mockModule("@aws-sdk/client-appconfigdata", () => require.resolve("@aws-sdk/client-appconfigdata"));

// Mock `configManager`
jest.mockModule("../src/core/config", () => {
    const { ConfigManagerMock } = require("./mocks/config/ConfigManager.mock");

    return {
        configManager: new ConfigManagerMock(),
    };
});

// Add es module to `@peersyst/react-components`
jest.mockModule("@peersyst/react-components", () => ({
    __esModule: true,
    ...(jest.requireActual("@peersyst/react-components") as any),
}));

// Add es module to `react-transition-group`
jest.mockModule("react-transition-group", () => ({
    __esModule: true,
    ...(jest.requireActual("react-transition-group") as any),
    Transition: ({ children }: any) => children("visible"),
}));

// Add es module to `react-router-dom`
jest.mockModule("react-router-dom", () => ({
    __esModule: true,
    ...(jest.requireActual("react-router-dom") as any),
}));

// Window mocks
import { LightMatchMediaMock } from "./mocks/MatchMedia.mock";
import { IntersectionObserverMock } from "./mocks/IntersectionObserver.mock";
import { ResizeObserverMock } from "./mocks/ResizeObserver.mock";
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(LightMatchMediaMock as any),
});

window.IntersectionObserver = jest.fn().mockImplementation(IntersectionObserverMock) as any;
window.ResizeObserver = jest.fn().mockImplementation(ResizeObserverMock) as any;

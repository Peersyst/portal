// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Load polyfills
import "../src/polyfills";

// Set up data access
import "../src/core/data-access/setup";

// Set up domain
import "../src/core/domain/setup";

// Mock `withRetries` to avoid retries in tests
jest.mock("@shared/utils", () => ({
    ...(jest.requireActual("@shared/utils") as any),
    withRetries: (fn: () => any) => fn(),
}));

// Use require.resolve to force the module to be resolved using the CSJ entry point. Otherwise, jest cannot transform ESM.
jest.mock("@aws-sdk/client-appconfigdata", () => require.resolve("@aws-sdk/client-appconfigdata"));

// Mock `configManager`
jest.mock("../src/config", () => {
    const { ConfigManagerMock } = require("./mocks/config/config.manager.mock");

    return {
        configManager: new ConfigManagerMock(),
    };
});

// Add es module to `@frontend/design-system-react`
jest.mock("@frontend/design-system-react", () => ({
    __esModule: true,
    ...(jest.requireActual("@frontend/design-system-react") as any),
}));

// Add es module to `react-transition-group`
jest.mock("react-transition-group", () => ({
    __esModule: true,
    ...(jest.requireActual("react-transition-group") as any),
    Transition: ({ children }: any) => children("visible"),
}));

// Add es module to `react-router-dom`
jest.mock("react-router-dom", () => ({
    __esModule: true,
    ...(jest.requireActual("react-router-dom") as any),
}));

// Window mocks
import { LightMatchMediaMock } from "./mocks/match-media.mock";
import { IntersectionObserverMock } from "./mocks/intersection-observer.mock";
import { ResizeObserverMock } from "./mocks/resize-observer.mock";
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(LightMatchMediaMock as any),
});

window.IntersectionObserver = jest.fn().mockImplementation(IntersectionObserverMock) as any;
window.ResizeObserver = jest.fn().mockImplementation(ResizeObserverMock) as any;

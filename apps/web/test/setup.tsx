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

// Mock utils that are not needed in tests
import "@shared/utils/automock";

// Use require.resolve to force the module to be resolved using the CSJ entry point. Otherwise, jest cannot transform ESM.
jest.mock("@aws-sdk/client-appconfigdata", () => require.resolve("@aws-sdk/client-appconfigdata"));

// Mock `configManager`
jest.mock("../src/config", () => {
    const { ConfigManagerMock } = require("@frontend/config/test/mocks");

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

// Mock `useTranslate` and `useLanguage`. Otherwise, `DSProvider` fails to render
jest.mock("@frontend/locale/react", () => ({
    ...(jest.requireActual("@frontend/locale/react") as any),
    useTranslate: jest.fn(() => (key: string) => key),
    useLanguage: jest.fn(() => "en"),
}));

// Window mocks
import { LightMatchMediaMock } from "./mocks/match-media.mock";
import { IntersectionObserverMock } from "./mocks/intersection-observer.mock";
import { ResizeObserverMock } from "./mocks/resize-observer.mock";

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(LightMatchMediaMock as any),
});

window.IntersectionObserver = jest.fn().mockReturnValue(new IntersectionObserverMock()) as any;
window.ResizeObserver = jest.fn().mockReturnValue(new ResizeObserverMock()) as any;

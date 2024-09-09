import { mockify } from "@shared/test";

export const ResizeObserverMock = mockify<ResizeObserver>({
    observe: () => null,
    unobserve: () => undefined,
    disconnect: () => undefined,
});

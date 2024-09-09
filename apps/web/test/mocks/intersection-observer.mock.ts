import { mockify } from "@shared/test";

export const IntersectionObserverMock = mockify<IntersectionObserver>({
    observe: () => null,
    disconnect: () => undefined,
});

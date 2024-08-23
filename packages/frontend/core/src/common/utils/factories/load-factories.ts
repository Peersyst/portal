import { isDomainError } from "../../../domain/error";
import { IFactory } from "@shared/utils";

export async function loadFactories(...factories: IFactory<{}>[]): Promise<() => void> {
    try {
        const cleanups = await Promise.all(factories.map((factory) => factory.load()));
        return () => {
            cleanups.map((cleanup) => cleanup());
        };
    } catch (e) {
        if (!isDomainError(e) || e.message !== "SESSION_EXPIRED") throw e;
        return () => undefined;
    }
}

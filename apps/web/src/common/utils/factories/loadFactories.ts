import { RepositoryFactory } from "@/core/data-access/factories/repository.factory";
import { ServiceFactory } from "@/core/data-access/factories/service.factory";
import { ControllerFactory } from "@/core/domain/factories/controller.factory";
import { isDomainError } from "@frontend/core/domain/error";

export async function loadFactories(): Promise<() => void> {
    try {
        const repositoryLoadCleanup = await RepositoryFactory.load();
        const serviceLoadCleanup = await ServiceFactory.load();
        const controllerLoadCleanup = await ControllerFactory.load();
        return () => {
            repositoryLoadCleanup();
            serviceLoadCleanup();
            controllerLoadCleanup();
        };
    } catch (e) {
        if (!isDomainError(e) || e.message !== "SESSION_EXPIRED") throw e;
        return () => undefined;
    }
}

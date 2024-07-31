import RepositoryFactory from "@/domain/adapter/RepositoryFactory";
import ServiceFactory from "@/domain/adapter/ServiceFactory";
import ControllerFactory from "@/ui/adapter/ControllerFactory";
import isDomainError from "@/ui/adapter/utils/isDomainError";

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
        if (!isDomainError(e) || e.code !== "SESSION_EXPIRED") throw e;
        return () => undefined;
    }
}

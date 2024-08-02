import RepositoryFactory from "@/domain/adapter/RepositoryFactory";
import ServiceFactory from "@/domain/adapter/ServiceFactory";
import ControllerFactory from "@/ui/adapter/ControllerFactory";

export async function initFactories(): Promise<void> {
    await RepositoryFactory.init();
    await ServiceFactory.init();
    await ControllerFactory.init();
}

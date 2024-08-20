import { RepositoryFactory } from "@/core/data-access/factories/repository.factory";
import { ServiceFactory } from "@/core/data-access/factories/service.factory";
import { ControllerFactory } from "@/core/domain/factories/controller.factory";

export async function initFactories(): Promise<void> {
    await RepositoryFactory.init();
    await ServiceFactory.init();
    await ControllerFactory.init();
}

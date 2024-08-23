import { IFactory } from "@shared/utils";

export async function initFactories(...factories: IFactory<{}>[]): Promise<void> {
    await Promise.all(factories.map((factory) => factory.init()));
}

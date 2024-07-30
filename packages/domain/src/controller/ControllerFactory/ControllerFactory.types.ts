import { IFactory } from "@peersyst/common";

export interface IControllerFactory {}

export interface IControllerFactoryInstance extends IControllerFactory {
    create(
        modules: Record<keyof IControllerFactory, (resolve: IControllerFactory) => IControllerFactory[keyof IControllerFactory]>,
    ): IFactory<IControllerFactory>;
}

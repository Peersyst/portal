import { Factory, IFactory } from "@peersyst/common";
import { IControllerFactoryInstance, IControllerFactory } from "./ControllerFactory.types";

let _ControllerFactory: IFactory<IControllerFactory> | undefined = undefined;

function create(
    modules: Record<keyof IControllerFactory, (resolve: IControllerFactory) => IControllerFactory[keyof IControllerFactory]>,
): IFactory<IControllerFactory> {
    if (_ControllerFactory) return _ControllerFactory;

    _ControllerFactory = Factory(modules);

    return _ControllerFactory;
}

export const ControllerFactory = new Proxy({} as IControllerFactoryInstance, {
    get: function (_target, prop) {
        if (prop === "create") return create;
        else {
            if (!_ControllerFactory) {
                throw new Error("ControllerFactory not initialized");
            }
            return _ControllerFactory[prop as keyof IFactory<IControllerFactory>];
        }
    },
});

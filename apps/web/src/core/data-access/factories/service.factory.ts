import { ServiceFactory } from "@frontend/core/data-access/service/factory";

declare module "@frontend/core/data-access/service/factory" {
    export interface IServiceFactory {}
}

ServiceFactory.create({});

export { ServiceFactory } from "@frontend/core/data-access/service/factory";

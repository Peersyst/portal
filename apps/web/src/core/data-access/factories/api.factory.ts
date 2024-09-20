import { ApiFactory } from "@frontend/core/data-access/api/factory";

import { IHealthApi } from "@frontend/health/domain/interfaces";
import { HealthApi } from "@shared/api";

declare module "@frontend/core/data-access/api/factory" {
    export interface IApiFactory {
        healthApi: IHealthApi;
    }
}

ApiFactory.create({
    healthApi: () => HealthApi,
});

export { ApiFactory } from "@frontend/core/data-access/api/factory";

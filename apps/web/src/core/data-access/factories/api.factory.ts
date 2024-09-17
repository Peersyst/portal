import { ApiFactory } from "@frontend/core/data-access/api/factory";

import { ITokensApi } from "@frontend/bridge/domain/interfaces";
import { IHealthApi } from "@frontend/health/domain/interfaces";
import { HealthApi, TokensApi } from "@shared/api";

declare module "@frontend/core/data-access/api/factory" {
    export interface IApiFactory {
        tokensApi: ITokensApi;
        healthApi: IHealthApi;
    }
}

ApiFactory.create({
    tokensApi: () => TokensApi,
    healthApi: () => HealthApi,
});

export { ApiFactory } from "@frontend/core/data-access/api/factory";

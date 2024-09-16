import { ApiFactory } from "@frontend/core/data-access/api/factory";

import { IBridgeApi, ITokensApi } from "@frontend/bridge/domain/interfaces";
import { IHealthApi } from "@frontend/health/domain/interfaces";
import { BridgeApi, HealthApi, TokensApi } from "@shared/api";

declare module "@frontend/core/data-access/api/factory" {
    export interface IApiFactory {
        bridgeApi: IBridgeApi;
        tokensApi: ITokensApi;
        healthApi: IHealthApi;
    }
}

ApiFactory.create({
    bridgeApi: () => BridgeApi,
    tokensApi: () => TokensApi,
    healthApi: () => HealthApi,
});

export { ApiFactory } from "@frontend/core/data-access/api/factory";

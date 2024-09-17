import { Chain } from "@frontend/chain";
import { AxelarErrors } from "./axelar.errors";
import { IConfigManager } from "@frontend/config";
import { GetChainsResponse } from "./responses/get-chains.response";
import { AxelarChain } from "./models/axelar-chain";
import { ServiceError } from "@frontend/core/data-access/service/error";
import { IAxelarService } from "./interfaces";
import { Service } from "@frontend/core/data-access/service";
import { deepmerge } from "@shared/utils";
import { AxelarChainObject } from "./types/axelar-chain.types";

@Service()
export class AxelarService implements IAxelarService {
    constructor(private readonly configManager: IConfigManager) {}

    private get url(): string {
        return this.configManager.get("axelar.url");
    }

    private get apiUrl(): string {
        return this.configManager.get("axelar.apiUrl");
    }

    /**
     * Get all the chains supported by Axelar.
     * @returns The list of chains supported by Axelar.
     */
    async getChains(): Promise<Chain[]> {
        const response = await fetch(`${this.apiUrl}/getChains`, { headers: { "Content-Type": "application/json" } });

        if (!response.ok) {
            throw new ServiceError(AxelarErrors.GET_CHAINS_FETCH_ERROR);
        }

        try {
            const axelarChains = (await response.json()) as GetChainsResponse;

            const extraChains = this.configManager.get("axelar.extraChains");
            axelarChains.push(...(extraChains as AxelarChainObject[]));

            const chainIds = this.configManager.get("axelar.chainIds");
            const additionalChainData = this.configManager.get("axelar.additionalChainData");

            const chains = axelarChains.reduce((prev, axelarChain) => {
                try {
                    if (chainIds[axelarChain.id]) {
                        let chainData = axelarChain;
                        if (additionalChainData[axelarChain.id]) chainData = deepmerge(axelarChain, additionalChainData[axelarChain.id]);

                        const chain = new AxelarChain(chainData, this.url).toChain();
                        prev.push(chain);
                    }
                } catch (_) {
                    // If the chain can't be parsed, we skip it.
                }
                return prev;
            }, [] as Chain[]);

            return chains;
        } catch (_) {
            throw new ServiceError(AxelarErrors.GET_CHAINS_PARSE_ERROR);
        }
    }
}

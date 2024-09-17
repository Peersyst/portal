import { Controller } from "@frontend/core/domain/controller";
import { Chain } from "../../common/chain";
import { IChainController } from "../../ui/interfaces/i-chain.controller";
import { IChainService } from "../interfaces/i-chain.service";

@Controller()
export class ChainController implements IChainController {
    constructor(private readonly chainService: IChainService) {}

    /**
     * Gets the chains.
     * @returns The chains.
     */
    async getChains(): Promise<Chain[]> {
        return this.chainService.getChains();
    }
}

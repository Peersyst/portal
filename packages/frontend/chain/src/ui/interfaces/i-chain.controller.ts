import { Chain } from "../../common/chain";

export interface IChainController {
    getChains(): Promise<Chain[]>;
}

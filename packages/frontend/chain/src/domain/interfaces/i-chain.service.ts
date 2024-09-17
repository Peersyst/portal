import { Chain } from "../../common/chain";

export interface IChainService {
    getChains(): Promise<Chain[]>;
}

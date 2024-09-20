import { Chain } from "@frontend/chain";
import { BridgeToken } from "../../common/bridge-token";

export interface IBridgeTokenService {
    getBridgeTokens(chain: Chain, otherChain: Chain, query?: string): Promise<BridgeToken[]>;
}

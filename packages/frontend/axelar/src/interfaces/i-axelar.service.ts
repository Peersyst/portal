import { IBridgeTokenService } from "@frontend/bridge/domain/interfaces";
import { IChainService } from "@frontend/chain/domain/interfaces";

export interface IAxelarService extends IChainService, IBridgeTokenService {}

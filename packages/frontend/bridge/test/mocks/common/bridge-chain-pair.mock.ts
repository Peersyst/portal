import { mockify } from "@shared/test";
import { BridgeChainPair } from "../../../src/common";
import { ChainMock } from "@frontend/chain/mocks/common";

export const BridgeChainPairMock = mockify<BridgeChainPair>({
    originChain: new ChainMock(),
    destinationChain: new ChainMock(),
});

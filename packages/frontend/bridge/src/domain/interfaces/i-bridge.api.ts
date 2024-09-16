import { BridgeDoorPairDto, ChainDto } from "@shared/api";

export interface IBridgeApi {
    findAllBridgeDoorPairs(chains?: [string, string]): Promise<BridgeDoorPairDto[]>;
    findBridgeDoorPair(chains: [string, string]): Promise<BridgeDoorPairDto>;
    findAllChains(): Promise<ChainDto[]>;
}

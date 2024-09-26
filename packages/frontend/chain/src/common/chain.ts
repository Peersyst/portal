import { Token, TokenObject } from "@frontend/token";
import { ChainType } from "@shared/modules/chain";
import { Explorer, ExplorerObject } from "./explorer";

export type ChainUrlsObject = {
    rpc?: string;
    ws?: string;
    faucet?: string;
};

export type ChainObject = {
    id: string;
    name: string;
    symbol: string;
    chainId?: number;
    image?: string;
    type: ChainType;
    nativeToken: TokenObject;
    door: string;
    urls: ChainUrlsObject;
    explorer: ExplorerObject;
};

export class Chain {
    id: string;
    name: string;
    symbol: string;
    chainId?: number;
    image?: string;
    type: ChainType;
    nativeToken: Token;
    door: string;
    urls: ChainUrlsObject;
    explorer: Explorer;

    constructor(chain: ChainObject) {
        this.id = chain.id;
        this.name = chain.name;
        this.symbol = chain.symbol;
        this.chainId = chain.chainId;
        this.image = chain.image;
        this.type = chain.type;
        this.nativeToken = new Token(chain.nativeToken);
        this.door = chain.door;
        this.urls = chain.urls;
        this.explorer = new Explorer(chain.explorer);
    }
}

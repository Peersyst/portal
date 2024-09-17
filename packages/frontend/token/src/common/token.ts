export type TokenObject = {
    symbol: string;
    decimals: number;
    name?: string;
    issuer?: string;
};

export class Token {
    symbol: string;
    decimals: number;
    name?: string;
    issuer?: string;

    constructor(token: TokenObject) {
        this.symbol = token.symbol;
        this.decimals = token.decimals;
        this.name = token.name;
        this.issuer = token.issuer;
    }
}

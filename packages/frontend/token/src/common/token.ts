export type TokenObject = {
    id?: string;
    symbol: string;
    decimals: number;
    name: string;
    image?: string;
    address?: string;
    isNative: boolean;
};

export class Token {
    id?: string;
    symbol: string;
    decimals: number;
    name: string;
    image?: string;
    address?: string;
    isNative: boolean;

    constructor(token: TokenObject) {
        this.id = token.id;
        this.symbol = token.symbol;
        this.decimals = token.decimals;
        this.name = token.name;
        this.image = token.image;
        this.address = token.address;
        this.isNative = token.isNative;
    }
}

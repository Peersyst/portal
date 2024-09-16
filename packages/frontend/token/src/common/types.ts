export type Token = {
    currency: string;
    decimals: number;
    issuer?: string;
};

export type TokenLike = {
    currency: string;
    issuer?: string;
    imageUrl?: string;
};

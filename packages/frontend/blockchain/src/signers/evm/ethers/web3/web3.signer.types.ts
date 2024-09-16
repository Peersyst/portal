export type AddWeb3ChainPayload = {
    chainId: number;
    chainName: string;
    rpcUrls: string[];
    blockExplorerUrls: string[];
    nativeCurrency: {
        symbol: string;
        decimals: number;
    };
};

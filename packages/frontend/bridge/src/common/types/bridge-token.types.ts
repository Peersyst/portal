import { XChainBridge } from "xchain-sdk";

export type BridgeTokenConstructorProps = {
    xChainBridge: XChainBridge;
    imageUrl?: string;
    isVerified: boolean;
    isPending?: boolean;
};

export class BridgeToken {
    /**
     * The XChainBridge corresponding to the bridge token.
     */
    xChainBridge: XChainBridge;
    /**
     * An image url for the token.
     */
    imageUrl?: string;
    /**
     * Indicates whether the bridge token is verified.
     */
    isVerified: boolean;
    /**
     * Indicates whether the bridge token is pending.
     * @default false
     */
    isPending: boolean;

    constructor({ xChainBridge, imageUrl, isVerified, isPending = false }: BridgeTokenConstructorProps) {
        this.xChainBridge = xChainBridge;
        this.imageUrl = imageUrl;
        this.isVerified = isVerified;
        this.isPending = isPending;
    }
}

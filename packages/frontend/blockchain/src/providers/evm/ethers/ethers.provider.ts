import { constants } from "ethers";
import { ChainType, EthersXChainProvider, XChainBridgeChainFormat, XChainBridgeFormat } from "xchain-sdk";
import { IEthersProvider } from "./interfaces/i-ethers.provider";
import { EVM_NATIVE_DECIMALS } from "@shared/evm";
import { Token } from "@frontend/token";

export class EthersProvider extends EthersXChainProvider implements IEthersProvider {
    /**
     * @inheritdoc
     */
    protected getTokenContract(_tokenAddress: string): any {
        return {};
    }

    /**
     * Gets the token of the specified xChainBridgeChain.
     * @param xChainBridgeChain The bridge chain.
     * @param xChainBridge The XChainBridge config.
     * @returns The token.
     */
    async getXChainBridgeChainToken(xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>, xChainBridge: any): Promise<Token> {
        const tokenContract = await this.getBridgeTokenContract(xChainBridgeChain.doorAddress, xChainBridge);
        const [decimals, symbol] = await Promise.all([tokenContract.decimals(), tokenContract.symbol()]);

        return {
            symbol,
            issuer: xChainBridgeChain.issue.issuer,
            decimals,
        };
    }

    /**
     * Gets the balance of a xChainBridgeChain token.
     * @param address The address of the account.
     * @param xChainBridgeChain The XChainBridgeChain in EVM format.
     * @param xChainBridge The XChainBridge in EVM format.
     * @returns The balance.
     */
    async getXChainBridgeChainTokenBalance(
        address: string,
        xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>,
        xChainBridge: XChainBridgeFormat<ChainType.EVM>,
    ): Promise<string> {
        const tokenContract = await this.getBridgeTokenContract(xChainBridgeChain.doorAddress, xChainBridge);
        const balance = await tokenContract.balanceOf(address);
        return balance.toString();
    }

    /**
     * Gets the decimals of a xChainBridgeChain token.
     * @param xChainBridgeChain The XChainBridgeChain in EVM format.
     * @param xChainBridge The XChainBridge in EVM format.
     * @returns The decimals.
     */
    async getXChainBridgeChainTokenDecimals(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>,
        xChainBridge: XChainBridgeFormat<ChainType.EVM>,
    ): Promise<number> {
        const tokenContract = await this.getBridgeTokenContract(xChainBridgeChain.doorAddress, xChainBridge);
        return await tokenContract.decimals();
    }

    /**
     * Gets the name of a xChainBridgeChain token.
     * @param xChainBridgeChain The XChainBridgeChain in EVM format.
     * @param xChainBridge The XChainBridge in EVM format.
     * @returns The name.
     */
    async getXChainBridgeChainTokenName(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>,
        xChainBridge: XChainBridgeFormat<ChainType.EVM>,
    ): Promise<string> {
        const tokenContract = await this.getBridgeTokenContract(xChainBridgeChain.doorAddress, xChainBridge);
        return await tokenContract.name();
    }

    /**
     * @inheritdoc
     */
    async getXChainBridgeToken(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>,
        xChainBridge: XChainBridgeFormat<ChainType.EVM>,
    ): Promise<Token> {
        if (xChainBridgeChain.issue.issuer === constants.AddressZero)
            return Promise.resolve({
                symbol: xChainBridgeChain.issue.currency,
                decimals: EVM_NATIVE_DECIMALS,
            });
        else return this.getXChainBridgeChainToken(xChainBridgeChain, xChainBridge);
    }

    /**
     * @inheritdoc
     */
    async getXChainBridgeTokenBalance(
        address: string,
        xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>,
        xChainBridge: XChainBridgeFormat<ChainType.EVM>,
    ): Promise<string> {
        if (xChainBridgeChain.issue.issuer === constants.AddressZero) return this.getNativeBalance(address);
        else return this.getXChainBridgeChainTokenBalance(address, xChainBridgeChain, xChainBridge);
    }

    /**
     * @inheritdoc
     */
    async getXChainBridgeTokenDecimals(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>,
        xChainBridge: XChainBridgeFormat<ChainType.EVM>,
    ): Promise<number> {
        if (xChainBridgeChain.issue.issuer === constants.AddressZero) return Promise.resolve(EVM_NATIVE_DECIMALS);
        else return this.getXChainBridgeChainTokenDecimals(xChainBridgeChain, xChainBridge);
    }

    /**
     * @inheritdoc
     */
    async getXChainBridgeTokenName(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType.EVM>,
        xChainBridge: XChainBridgeFormat<ChainType.EVM>,
    ): Promise<string> {
        if (xChainBridgeChain.issue.issuer === constants.AddressZero) return Promise.resolve(xChainBridgeChain.issue.currency);
        else return this.getXChainBridgeChainTokenName(xChainBridgeChain, xChainBridge);
    }

    /**
     * @inheritdoc
     */
    async getTokenDecimals(tokenAddress: string): Promise<number> {
        const tokenContract = this.getTokenContract(tokenAddress);
        return await tokenContract.decimals();
    }

    /**
     * @inheritdoc
     */
    async getTokenName(tokenAddress: string): Promise<string> {
        const tokenContract = this.getTokenContract(tokenAddress);
        return await tokenContract.name();
    }

    /**
     * @inheritdoc
     */
    async getTokenCurrency(tokenAddress: string): Promise<string> {
        const tokenContract = this.getTokenContract(tokenAddress);
        return tokenContract.symbol();
    }

    /**
     * @inheritdoc
     */
    async getTokenBalance(tokenAddress: string): Promise<string> {
        const tokenContract = this.getTokenContract(tokenAddress);
        const balance = await tokenContract.balanceOf(tokenAddress);
        return balance.toString();
    }

    /**
     * @inheritdoc
     */
    isTokenAddressValid(address: string): Promise<boolean> {
        return this.isErc20Address(address);
    }
}

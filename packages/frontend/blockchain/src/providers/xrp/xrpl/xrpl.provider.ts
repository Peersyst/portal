import { XrplXChainProvider, ChainType, XChainBridgeChainFormat } from "xchain-sdk";
import { xrpToDrops } from "xrpl";
import { IXrplProvider } from "./interfaces/i-xrpl.provider";
import BigNumber from "bignumber.js";
import { convertCurrencyCode, parseCurrencyCode } from "@shared/xrpl/currency-code";
import { XRPL_TOKEN_DECIMALS, XRPL_NATIVE_DECIMALS } from "@shared/xrpl";
import { decimalToInt } from "@shared/number";
import { Token } from "@frontend/token";

export class XrplProvider extends XrplXChainProvider implements IXrplProvider {
    /**
     * Gets the xrp reserve of an account in drops.
     * @param address The address of the account.
     * @returns The reserve in drops.
     */
    async getReserve(address: string): Promise<string> {
        const serverInfo = await this.xrplClient.request({
            command: "server_info",
        });

        const accountInfo = await this.xrplClient.request({
            command: "account_info",
            account: address,
            ledger_index: "validated",
        });

        if (serverInfo.result && serverInfo.result.info.validated_ledger && accountInfo.result) {
            const reserveBase = serverInfo.result.info.validated_ledger.reserve_base_xrp;
            const reserveInc = serverInfo.result.info.validated_ledger.reserve_inc_xrp;
            const ownerCount = accountInfo.result.account_data.OwnerCount;
            return xrpToDrops(
                BigNumber(reserveBase)
                    .plus(BigNumber(reserveInc).multipliedBy(BigNumber(ownerCount)))
                    .toString(),
            );
        } else {
            throw new Error(`Could not get XRP reserve of ${address}`);
        }
    }

    /**
     * @inheritdoc
     */
    async getNativeBalance(address: string): Promise<string> {
        let balance: string;

        try {
            balance = xrpToDrops(await this.xrplClient.getXrpBalance(address));
        } catch (_e) {
            return "0";
        }

        const reserve = await this.getReserve(address);

        return BigNumber.max(BigNumber(balance).minus(BigNumber(reserve)), BigNumber(0)).toString();
    }

    /**
     * Gets the IOU balance of an account as an integer.
     * @param address Address of the account.
     * @param issuer The issuer of the IOU.
     * @param currencyCode The IOU currency.
     * @returns The balance in drops.
     */
    async getIOUBalance(address: string, issuer: string, currencyCode: string): Promise<string> {
        const balances = await this.xrplClient.getBalances(address);

        return decimalToInt(
            balances.find((balance) => balance.currency === convertCurrencyCode(currencyCode) && balance.issuer === issuer)?.value || "0",
            XRPL_TOKEN_DECIMALS,
        );
    }

    /**
     * @inheritdoc
     */
    getXChainBridgeToken(xChainBridgeChain: XChainBridgeChainFormat<ChainType.XRP>): Promise<Token> {
        if (xChainBridgeChain.issue.issuer === undefined)
            return Promise.resolve({ symbol: xChainBridgeChain.issue.currency, decimals: XRPL_NATIVE_DECIMALS });
        else
            return Promise.resolve({
                symbol: parseCurrencyCode(xChainBridgeChain.issue.currency),
                issuer: xChainBridgeChain.issue.issuer,
                decimals: XRPL_TOKEN_DECIMALS,
            });
    }

    /**
     * @inheritdoc
     */
    getXChainBridgeTokenBalance(address: string, xChainBridgeChain: XChainBridgeChainFormat<ChainType.XRP>): Promise<string> {
        if (xChainBridgeChain.issue.issuer === undefined) return this.getNativeBalance(address);
        else return this.getIOUBalance(address, xChainBridgeChain.issue.issuer, xChainBridgeChain.issue.currency);
    }

    /**
     * @inheritdoc
     */
    getXChainBridgeTokenDecimals(xChainBridgeChain: XChainBridgeChainFormat<ChainType.XRP>): Promise<number> {
        if (xChainBridgeChain.issue.issuer === undefined) return Promise.resolve(XRPL_NATIVE_DECIMALS);
        else return Promise.resolve(XRPL_TOKEN_DECIMALS);
    }

    /**
     * @inheritdoc
     */
    getXChainBridgeTokenName(xChainBridgeChain: XChainBridgeChainFormat<ChainType>): Promise<string> {
        return Promise.resolve(xChainBridgeChain.issue.currency);
    }

    /**
     * @inheritdoc
     */
    async isTokenAddressValid(_address: string): Promise<boolean> {
        return Promise.resolve(false);
    }
}

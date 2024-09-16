import {
    ChainType,
    ClaimId,
    CommitTransaction,
    CreateAccountCommitTransaction,
    CreateClaimTransaction,
    FormattedBridge,
    TrustCommitTransaction,
    Unconfirmed,
    XrplXChainSigner,
    XrplXChainSignerProvider,
} from "xchain-sdk";
import { IXrplSigner } from "../interfaces/i-xrp.signer";
import { XrplSignerError } from "./xrpl.signer.errors";
import { SignerError } from "../../core/error";

export class XrplSigner<Provider extends XrplXChainSignerProvider = XrplXChainSignerProvider>
    extends XrplXChainSigner<Provider>
    implements IXrplSigner
{
    /**
     * Handles service errors.
     * @param e Error.
     */
    private handleError(e: any): any {
        if (e instanceof Error) {
            const transactionSubmissionFiledMatches = /Transaction submission failed with code: (\b.+$)/.exec(e.message);
            if (transactionSubmissionFiledMatches) {
                const code = transactionSubmissionFiledMatches[1];
                throw new SignerError(XrplSignerError.TRANSACTION_SUBMISSION_FAILED, { code });
            } else {
                throw e;
            }
        } else {
            throw e;
        }
    }

    /**
     * @inheritdoc
     */
    async setTrustLine(issuer: string, currency: string, limitAmount?: string): Promise<Unconfirmed<TrustCommitTransaction>> {
        try {
            return await super.setTrustLine(issuer, currency, limitAmount);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async createClaim(originAddress: string, bridge: FormattedBridge<ChainType.XRP>): Promise<Unconfirmed<CreateClaimTransaction>> {
        try {
            return await super.createClaim(originAddress, bridge);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async commit(
        claimId: ClaimId,
        destinationAddress: string,
        bridge: FormattedBridge<ChainType.XRP>,
        amount: string,
    ): Promise<Unconfirmed<CommitTransaction>> {
        try {
            return await super.commit(claimId, destinationAddress, bridge, amount);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async createAccountCommit(
        destinationAddress: string,
        bridge: FormattedBridge<ChainType.XRP>,
        amount: string,
    ): Promise<Unconfirmed<CreateAccountCommitTransaction>> {
        try {
            return await super.createAccountCommit(destinationAddress, bridge, amount);
        } catch (e) {
            return this.handleError(e);
        }
    }
}

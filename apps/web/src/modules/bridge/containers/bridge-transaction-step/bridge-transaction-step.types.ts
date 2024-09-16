import { BridgeTransferStage } from "xchain-sdk";

export type BridgeTransactionStepProps = {
    stage: Exclude<BridgeTransferStage, "attestations">;
    /**
     * Required as the first {stage}Requested event is fired before rendering the component
     */
    isFirst?: boolean;
};

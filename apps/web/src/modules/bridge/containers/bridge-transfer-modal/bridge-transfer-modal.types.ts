import { CommonModalComponentProps } from "@frontend/design-system-react/modal";
import { BridgeTransferStartData } from "xchain-sdk";

export type BridgeTransferModalProps = CommonModalComponentProps & {
    data: BridgeTransferStartData;
};

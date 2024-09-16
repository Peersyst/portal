import { useBridgeSourceChainState } from "@frontend/bridge/ui/hooks";
import { ChainBlockchainAddress } from "@frontend/design-system-react/chain-blockchain-address";
import { BridgeBlockchainAddressProps } from "./bridge-blockchain-address.types";

export function BridgeBlockchainAddress({ source: side, ...blockchainAddressProps }: BridgeBlockchainAddressProps): JSX.Element {
    const chain = useBridgeSourceChainState(side, true);

    return <ChainBlockchainAddress chain={chain} {...blockchainAddressProps} />;
}

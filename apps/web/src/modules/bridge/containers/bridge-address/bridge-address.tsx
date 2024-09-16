import { BridgeAddressProps } from "./bridge-address.types";
import { useBridgeSourceChainState } from "@frontend/bridge/ui/hooks";
import { ChainAddress } from "@frontend/design-system-react/chain-address";

export function BridgeAddress({ address, source: side }: BridgeAddressProps): JSX.Element {
    const chain = useBridgeSourceChainState(side, true);

    return <ChainAddress address={address} chain={chain} />;
}

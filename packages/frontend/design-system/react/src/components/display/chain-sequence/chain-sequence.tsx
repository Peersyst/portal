import { useTheme } from "../../../themes/common/hooks";
import { Chain } from "../chain/chain";
import { Sequence } from "../sequence/sequence";
import { ChainSequenceIcon } from "./chain-sequence.styles";
import { ChainSequenceProps } from "./chain-sequence.types";

export const ChainSequence = ({ origin: sourceChain, destination: destinationChain }: ChainSequenceProps): JSX.Element => {
    const { spacing } = useTheme();

    return (
        <Sequence wrap wrapGap={spacing[4]} Icon={ChainSequenceIcon}>
            <Chain chain={sourceChain} />
            <Chain chain={destinationChain} />
        </Sequence>
    );
};

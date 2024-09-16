import { useTheme } from "../../../themes/common/hooks";
import { ChevronRightIcon } from "../../icons";
import { Row } from "../../layout/row";
import { useSequenceItems } from "./hooks/use-sequence-items";
import { SequenceProps } from "./sequence.types";

export const Sequence = ({ children, Icon = ChevronRightIcon, ...props }: SequenceProps): JSX.Element => {
    const { spacing } = useTheme();

    const sequenceItems = useSequenceItems({ children, Icon });

    return (
        <Row gap={spacing[3]} alignItems="center" {...props}>
            {sequenceItems}
        </Row>
    );
};

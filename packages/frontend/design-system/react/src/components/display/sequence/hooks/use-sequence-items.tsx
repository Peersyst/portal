import { Fragment, useMemo } from "react";
import { ChevronRightIcon } from "../../../icons";
import { SequenceProps } from "../sequence.types";

export type UseSequenceItemsProps = {
    children: SequenceProps["children"];
    Icon: SequenceProps["Icon"];
};

/**
 * Returns the items of a sequence.
 * @param props The props of the sequence.
 * @returns The items of the sequence.
 */
export function useSequenceItems({ children, Icon = ChevronRightIcon }: UseSequenceItemsProps): JSX.Element[] {
    return useMemo(() => {
        return children.reduce((acc, child, index) => {
            acc.push(<Fragment key={`child-${index}`}>{child}</Fragment>);
            if (index < children.length - 1) {
                acc.push(<Icon className="SequenceIcon" key={`icon-${index}`} />);
            }
            return acc;
        }, [] as JSX.Element[]);
    }, [children, Icon]);
}

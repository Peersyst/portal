import { LabelProps } from "@peersyst/react-components";
import { GroupLabelRoot } from "./group-label.styles";

export type GroupLabelProps = Omit<LabelProps, "variant">;

export const GroupLabel = ({ label, placement = "top", alignment, gap = "0.25rem", ...rest }: GroupLabelProps): JSX.Element => {
    const isVertical = placement === "top" || placement === "bottom";
    return (
        <GroupLabelRoot
            label={label}
            variant={isVertical ? "caption2Regular" : "caption1Regular"}
            gap={gap}
            placement={placement}
            alignment={alignment || (isVertical ? "start" : "space-between")}
            {...rest}
        />
    );
};

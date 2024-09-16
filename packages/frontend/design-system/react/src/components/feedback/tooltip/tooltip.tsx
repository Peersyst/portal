import { isValidElement } from "react";
import { TooltipProps } from "./tooltip.types";
import { Popover } from "../popover";
import { Typography } from "../../display/typography";

export function Tooltip({ icon, content, ...popoverProps }: TooltipProps): JSX.Element {
    return (
        <Popover {...popoverProps}>
            <Popover.Content>{icon}</Popover.Content>
            <Popover.Popper>
                {content && (isValidElement(content) ? content : <Typography variant="caption1Regular">{content}</Typography>)}
            </Popover.Popper>
        </Popover>
    );
}

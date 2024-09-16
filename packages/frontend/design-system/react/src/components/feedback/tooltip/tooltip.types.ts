import { ReactElement, ReactNode } from "react";
import { PopoverProps } from "../popover";

export type TooltipProps = Omit<PopoverProps, "children"> & {
    icon: ReactElement;
    content: ReactNode;
};

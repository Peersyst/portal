import { RowProps } from "@peersyst/react-components";
import { ComponentType, HTMLAttributes, ReactElement } from "react";

export interface SequenceProps extends Omit<RowProps, "children"> {
    children: ReactElement[];
    Icon?: ComponentType<HTMLAttributes<any>>;
}

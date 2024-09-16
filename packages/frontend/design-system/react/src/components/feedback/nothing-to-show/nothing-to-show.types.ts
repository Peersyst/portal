import { CSSProperties, ReactNode } from "react";

export interface NothingToShowProps {
    className?: string;
    style?: CSSProperties;
    label?: string;
    icon?: ReactNode;
    showLabel?: boolean;
    showIcon?: boolean;
}

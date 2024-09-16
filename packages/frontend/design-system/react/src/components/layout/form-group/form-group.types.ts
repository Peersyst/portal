import { CSSProperties, ReactNode } from "react";

export interface FormGroupProps {
    children?: ReactNode;
    label: string;
    className?: string;
    style?: CSSProperties;
}

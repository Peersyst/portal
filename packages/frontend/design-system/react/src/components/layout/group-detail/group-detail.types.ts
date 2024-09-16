import { CSSProperties, ReactElement } from "react";

export interface GroupDetailProps {
    label: string;
    complement?: ReactElement;
    value: string;
    isLoading?: boolean;
    style?: CSSProperties;
    className?: string;
}

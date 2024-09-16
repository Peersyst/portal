import { SkeletonProps } from "@peersyst/react-components";
import { ReactElement, ReactNode } from "react";
import { GroupProps } from "../group/group.types";
import { ThemeSpacingKeys } from "../../../themes/common/spacing/spacing.types";

export interface DataLoaderProps {
    nothingToShow?: ReactNode;
    Skeleton?: GroupProps<SkeletonProps>["Component"];
    isLoading?: boolean;
    numberOfSkeletons?: number;
}

export interface ListProps<T> extends DataLoaderProps {
    gap?: ThemeSpacingKeys;
    className?: string;
    style?: React.CSSProperties;
    renderItem?: (data: T, index: number) => ReactElement;
    data?: T[];
}

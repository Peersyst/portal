import { JSXElementConstructor } from "react";

export interface BaseSkeletonProps {
    loading?: boolean;
}

export type SkeletonsProps<P extends BaseSkeletonProps = BaseSkeletonProps> = {
    Skeleton: JSXElementConstructor<P>;
    count: number;
} & P;

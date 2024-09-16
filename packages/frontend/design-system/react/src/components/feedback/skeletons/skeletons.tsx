import { BaseSkeletonProps, SkeletonsProps } from "./skeletons.types";

export function Skeletons<P extends BaseSkeletonProps = BaseSkeletonProps>({ Skeleton, count, ...rest }: SkeletonsProps<P>): JSX.Element {
    return (
        <>
            {[...Array(count)].map((_, i) => {
                // @ts-ignore
                return <Skeleton key={i} loading {...rest} />;
            })}
        </>
    );
}

import { Skeleton, useTheme } from "@peersyst/react-components";
import clsx from "clsx";
import { Fragment } from "react";
import { ListProps } from "./list.types";
import { ListRoot } from "./list.styles";
import { Group } from "../group";
import { NothingToShow } from "../../feedback/nothing-to-show";

export function List<T>({
    className,
    style,
    gap = 0,
    data,
    Skeleton: SkeletonProp = Skeleton,
    numberOfSkeletons = 3,
    renderItem,
    isLoading,
    nothingToShow,
}: ListProps<T>): JSX.Element {
    const { spacing } = useTheme();
    const hasItems = isLoading || (data?.length ?? 0) > 0;

    return (
        <ListRoot className={clsx("List", className)} gap={spacing[gap]} style={style}>
            {hasItems ? (
                <>
                    {data?.map((item, i) => <Fragment key={i}>{renderItem?.(item, i)}</Fragment>)}
                    {isLoading && <Group Component={SkeletonProp} count={numberOfSkeletons} />}
                </>
            ) : (
                <>{nothingToShow ?? <NothingToShow />}</>
            )}
        </ListRoot>
    );
}

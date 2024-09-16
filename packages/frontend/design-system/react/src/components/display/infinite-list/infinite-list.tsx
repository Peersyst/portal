import { InfiniteScroll } from "@peersyst/react-components";
import { InfiniteListProps } from "./infinite-list.types";
import { List } from "../list/list";

export function InfiniteList<E>({
    data,
    isLoading = false,
    numberOfSkeletons,
    Skeleton,
    end = false,
    nothingToShow,
    renderItem,
    onEndReached,
    className,
    style,
    gap,
    ...rest
}: InfiniteListProps<E>) {
    const pages = data?.pages || [];
    const hasItems = isLoading || pages.length > 0;

    return (
        <InfiniteScroll end={!hasItems || end} loading={isLoading} callback={onEndReached} {...rest}>
            <List
                data={data?.pages.flatMap((page) => page.items)}
                isLoading={isLoading}
                numberOfSkeletons={numberOfSkeletons}
                Skeleton={Skeleton}
                nothingToShow={nothingToShow}
                renderItem={renderItem}
                className={className}
                style={style}
                gap={gap}
            />
        </InfiniteScroll>
    );
}

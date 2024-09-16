import { PaginatedData } from "@frontend/misc/pagination";
import { DataLoaderProps, ListProps } from "../list/list.types";
import { InfiniteScrollProps as BaseInfiniteScrollProps } from "@peersyst/react-components";
import { ReactElement } from "react";

export type EnhancedInfiniteScrollProps = {
    onEndReached: BaseInfiniteScrollProps["callback"];
    end?: BaseInfiniteScrollProps["end"];
} & Omit<BaseInfiniteScrollProps, "callback" | "children" | "loading" | "end" | "loaderElement">;

export type InfiniteData<T> = {
    pages: T[];
    pageParams: unknown[];
};

export type InfiniteScrollDataProps<E> = {
    data: InfiniteData<PaginatedData<E[]>> | undefined;
    children?: ((item: PaginatedData<E[]>["items"][number], index: number) => ReactElement) | ReactElement;
    renderItem?: (item: PaginatedData<E[]>["items"][number], index: number) => ReactElement;
} & EnhancedInfiniteScrollProps &
    DataLoaderProps;

export type OmittedDataListProps<E> = Pick<ListProps<PaginatedData<E[]>>, "className" | "style" | "gap">;

export interface InfiniteListProps<E> extends OmittedDataListProps<E>, InfiniteScrollDataProps<E> {}

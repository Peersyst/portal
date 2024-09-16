export interface PaginatedData<TData extends unknown[] = unknown[]> {
    currentPage: number;
    pages: number;
    items: TData;
}

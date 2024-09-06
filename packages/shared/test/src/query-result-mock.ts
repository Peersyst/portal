export class QueryResultMock {
    isLoading: boolean;
    isFetching: boolean;
    isPending: boolean;
    data: any;

    constructor({ isLoading = false, isFetching = false, isPending = false, data = "data" }: Partial<QueryResultMock> = {}) {
        this.isLoading = isLoading;
        this.isFetching = isFetching;
        this.isPending = isPending;
        this.data = data;
    }
}

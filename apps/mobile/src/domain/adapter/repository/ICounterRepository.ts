export interface ICounterRepository {
    getCount(): Promise<number | undefined>;
    setCount(count: number): Promise<void>;
}

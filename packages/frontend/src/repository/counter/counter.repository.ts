import BaseRepository from "../base.repository";

export default class CounterRepository extends BaseRepository<number> {
    constructor() {
        super("counter");
    }

    getCount(): number | null {
        return this.get();
    }

    setCount(count: number): void {
        this.set(count);
    }
}

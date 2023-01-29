import CounterRepository from "repository/counter/counter.repository";

export default class RepositoryFactory {
    private static counterRepository: CounterRepository | undefined;

    static getCounterRepository(): CounterRepository {
        if (!this.counterRepository) return (this.counterRepository = new CounterRepository());
        return this.counterRepository;
    }
}

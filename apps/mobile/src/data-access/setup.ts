const RepositoryFactory = Factory({
    SettingsRepository: () => new SettingsRepository(localStorage),
});

export class SettingsRepository extends Repository {}

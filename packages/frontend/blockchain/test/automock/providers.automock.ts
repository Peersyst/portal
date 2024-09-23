jest.mock("@frontend/blockchain/providers", () => {
    const { ProviderMock } = require("../mocks/providers");

    return {
        ...jest.requireActual("@frontend/blockchain/providers"),
        ProviderFactory: jest.fn().mockReturnValue(new ProviderMock()),
    };
});

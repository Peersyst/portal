jest.mock("@shared/evm/contracts", () => {
    return {
        ...jest.requireActual("@shared/evm/contracts"),
        ERC20: jest.fn(),
    };
});

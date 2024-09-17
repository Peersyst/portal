import { QueryResultMock } from "@frontend/query/mocks";
import { ChainMock } from "../../mocks/common";

jest.mock("@frontend/chain/ui/queries", () => ({
    useGetChains: jest.fn().mockReturnValue(new QueryResultMock({ data: [new ChainMock()] })),
}));

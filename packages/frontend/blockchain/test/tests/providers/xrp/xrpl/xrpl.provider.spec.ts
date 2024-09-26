import { RippledError, xrpToDrops } from "xrpl";
import { XrplProvider } from "../../../../../src/providers/xrp/xrpl";
import { ClientMock } from "@shared/xrpl/mocks/client";
import { ServerInfoResponseMock, AccountInfoResponseMock } from "@shared/xrpl/mocks/responses";
import BigNumber from "bignumber.js";
import { ProviderError } from "../../../../../src/providers/core/error";
import { XrplProviderErrors } from "../../../../../src/providers/xrp/xrpl/xrpl.provider.errors";
import { BalanceMock } from "@shared/xrpl/mocks/balance";
import { decimalToInt } from "@shared/number";
import { XRPL_TOKEN_DECIMALS } from "@shared/xrpl";
import { TokenMock } from "@frontend/token/mocks/common";

describe("XrplProvider", () => {
    let xrplProvider: XrplProvider;

    const addressMock = "r34567890abcdefghijklmnopqrstu";
    const clientMock = new ClientMock();

    beforeEach(() => {
        clientMock.clearMocks();

        xrplProvider = new XrplProvider(clientMock);
    });

    describe("isAccountActive", () => {
        it("should return true if the account is active", async () => {
            clientMock.request.mockResolvedValueOnce({});

            const result = await xrplProvider.isAccountActive(addressMock);

            expect(result).toBe(true);
        });

        it("should return false if the account is not active", async () => {
            clientMock.request.mockRejectedValueOnce(new RippledError("Account not found."));

            const result = await xrplProvider.isAccountActive(addressMock);

            expect(result).toBe(false);
        });
    });

    describe("getReserve", () => {
        it("should return the reserve of the account", async () => {
            const reserveBaseMock = 1000000;
            const reserveIncMock = 0;
            const ownerCountMock = 50000000;
            const serverInfoResponseMock = new ServerInfoResponseMock({
                result: {
                    info: {
                        validated_ledger: {
                            reserve_base_xrp: reserveBaseMock,
                            reserve_inc_xrp: reserveIncMock,
                        } as any,
                    },
                },
            });
            const accountInfoResponseMock = new AccountInfoResponseMock({
                result: {
                    account_data: {
                        OwnerCount: ownerCountMock,
                    },
                },
            });

            clientMock.request.mockResolvedValueOnce(serverInfoResponseMock);
            clientMock.request.mockResolvedValueOnce(accountInfoResponseMock);

            const result = await xrplProvider.getReserve(addressMock);

            expect(result).toBe(
                xrpToDrops(
                    BigNumber(reserveBaseMock)
                        .plus(BigNumber(reserveIncMock).multipliedBy(BigNumber(ownerCountMock)))
                        .toString(),
                ),
            );
        });

        it("should throw error if the server info result is not defined", async () => {
            const serverInfoResponseMock = new ServerInfoResponseMock({
                result: undefined,
            });

            clientMock.request.mockResolvedValueOnce(serverInfoResponseMock);

            await expect(xrplProvider.getReserve(addressMock)).rejects.toThrow(
                new ProviderError(XrplProviderErrors.COULD_NOT_GET_XRP_RESERVE_OF_ADDRESS, { address: addressMock }),
            );
        });

        it("should throw error if the account data result is not defined", async () => {
            const serverInfoResponseMock = new ServerInfoResponseMock({
                result: {
                    info: {
                        validated_ledger: {
                            reserve_base_xrp: 1,
                            reserve_inc_xrp: 1,
                        } as any,
                    },
                },
            });
            const accountInfoResponseMock = new AccountInfoResponseMock({
                result: undefined,
            });

            clientMock.request.mockResolvedValueOnce(serverInfoResponseMock);
            clientMock.request.mockResolvedValueOnce(accountInfoResponseMock);

            await expect(xrplProvider.getReserve(addressMock)).rejects.toThrow(
                new ProviderError(XrplProviderErrors.COULD_NOT_GET_XRP_RESERVE_OF_ADDRESS, { address: addressMock }),
            );
        });
    });

    describe("getNativeBalance", () => {
        it("should return the native balance of the account", async () => {
            const balanceMock = "1000000000";
            const reserveMock = "10000000";

            clientMock.getXrpBalance.mockResolvedValueOnce(balanceMock);
            jest.spyOn(xrplProvider, "getReserve").mockResolvedValueOnce(reserveMock);

            const result = await xrplProvider.getNativeBalance(addressMock);

            expect(result).toBe(BigNumber.max(BigNumber(xrpToDrops(balanceMock)).minus(BigNumber(reserveMock)), BigNumber(0)).toString());
        });
    });

    describe("getIOUBalance", () => {
        it("should return the IOU balance of the account", async () => {
            const balanceMock = new BalanceMock({ currency: "USD", issuer: "r343ergwsdfe485gjebjebid", value: "100" });

            clientMock.getBalances.mockResolvedValueOnce([balanceMock]);

            const result = await xrplProvider.getIOUBalance(addressMock, balanceMock.issuer!, balanceMock.currency);

            expect(result).toBe(decimalToInt(balanceMock.value, XRPL_TOKEN_DECIMALS));
        });

        it("should return 0 if the balance is not found", async () => {
            clientMock.getBalances.mockResolvedValueOnce([]);

            const result = await xrplProvider.getIOUBalance(addressMock, "r343ergwsdfe485gjebjebid", "USD");

            expect(result).toBe("0");
        });
    });

    describe("getTokenBalance", () => {
        it("should return the native balance if the token is native", async () => {
            const tokenMock = new TokenMock({ isNative: jest.fn().mockReturnValue(true) });
            const nativeBalanceMock = "200";

            const getNativeBalanceSpy = jest.spyOn(xrplProvider, "getNativeBalance").mockResolvedValueOnce(nativeBalanceMock);

            const result = await xrplProvider.getTokenBalance(addressMock, tokenMock);

            expect(getNativeBalanceSpy).toHaveBeenCalledWith(addressMock);
            expect(result).toBe(nativeBalanceMock);
        });

        it("should return the IOU balance if the token is not native", async () => {
            const tokenMock = new TokenMock({ isNative: jest.fn().mockReturnValue(false) });
            const iouBalanceMock = "100";

            const getIOUBalanceSpy = jest.spyOn(xrplProvider, "getIOUBalance").mockResolvedValueOnce(iouBalanceMock);

            const result = await xrplProvider.getTokenBalance(addressMock, tokenMock);

            expect(getIOUBalanceSpy).toHaveBeenCalledWith(addressMock, tokenMock.address!, tokenMock.symbol);
            expect(result).toBe(iouBalanceMock);
        });
    });
});

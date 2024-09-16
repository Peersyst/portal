import { VerifiedERC20Dto, VerifiedIOUDto, VerifiedNativeTokenDto } from "@shared/api";

export type VerifiedTokenDto = VerifiedERC20Dto | VerifiedIOUDto | VerifiedNativeTokenDto;

export interface ITokensApi {
    findVerifiedTokens(chains: [string, string]): Promise<VerifiedTokenDto[]>;
}

import { WalletProviderFactory } from "@frontend/wallet/providers";
import { XrplFaucetWalletProvider } from "@frontend/wallet/providers/xrp/xrpl/xrpl-faucet";
import { MetamaskWalletProvider } from "@frontend/wallet/providers/evm/metamask";
import { RepositoryFactory } from "../../../../core/data-access/factories/repository.factory";

WalletProviderFactory.create({
    xrplFaucet: () => new XrplFaucetWalletProvider(RepositoryFactory.xrplFaucetSeedsRepository),
    metamask: () => new MetamaskWalletProvider(),
});

export { WalletProviderFactory } from "@frontend/wallet/providers";

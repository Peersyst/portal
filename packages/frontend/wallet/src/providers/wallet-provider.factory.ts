import { WalletProvider } from "./core/wallet-provider";
import { WalletProviderId } from "./types";

interface IWalletProviderFactory extends Record<WalletProviderId, WalletProvider> {
    create(providers: Partial<Record<WalletProviderId, () => WalletProvider>>): Record<WalletProviderId, WalletProvider>;
}

let _ref: Partial<Record<WalletProviderId, () => WalletProvider>> | undefined = undefined;

export const WalletProviderFactory = new Proxy({} as IWalletProviderFactory, {
    get: function (target, prop) {
        if (prop === "$$typeof") return (target as any)[prop];
        if (prop === "create")
            return function create(
                providers: Partial<Record<WalletProviderId, () => WalletProvider>>,
            ): Record<WalletProviderId, WalletProvider> {
                _ref = providers;

                return target;
            };
        else {
            if (!_ref) {
                throw new Error(`WalletProviderFactory not initialized`);
            } else if (!_ref[prop as WalletProviderId]) {
                throw new Error(`${prop as string} provider not found`);
            }
            return _ref[prop as WalletProviderId]!();
        }
    },
});

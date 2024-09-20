import { BridgeTransferResult, BridgeManagerEvents } from "xchain-sdk";
import { IBridgeTransferController } from "../../../ui/interfaces/i-bridge-transfer.controller";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { IBridgeWalletsController } from "../../../ui/interfaces/i-bridge-wallets.controller";
import { IBridgeManagerController } from "../../../ui/interfaces/i-bridge-manager.controller";
import { IWalletProvider } from "@frontend/wallet/providers/interfaces";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeTransferErrors } from "../../errors/bridge-transfer.errors";
import { Controller } from "@frontend/core/domain/controller";

@Controller()
export class BridgeTransferController implements IBridgeTransferController {
    constructor(
        private readonly bridgeChainsController: IBridgeChainsController,
        private readonly bridgeWalletsController: IBridgeWalletsController,
        private readonly bridgeManagerController: IBridgeManagerController,
    ) {}

    /**
     * Gets the origin wallet provider.
     * @returns The origin wallet provider.
     */
    private getOriginWalletProvider(): IWalletProvider {
        const originWalletProvider = this.bridgeWalletsController.originWalletProvider;
        if (!originWalletProvider) throw new DomainError(BridgeTransferErrors.ORIGIN_WALLET_PROVIDER_NOT_SET);
        return originWalletProvider;
    }

    /**
     * Gets the destination wallet provider.
     * @returns The destination wallet provider.
     */
    private getDestinationWalletProvider(): IWalletProvider {
        const destinationWalletProvider = this.bridgeWalletsController.destinationWalletProvider;
        if (!destinationWalletProvider) throw new DomainError(BridgeTransferErrors.DESTINATION_WALLET_PROVIDER_NOT_SET);
        return destinationWalletProvider;
    }

    /**
     * Swaps the bridge.
     */
    swap(): void {
        this.bridgeChainsController.swap();
        this.bridgeWalletsController.swap();
    }

    /**
     * Check if the destination can receive.
     * @returns True if the destination can receive, false otherwise.
     */
    async destinationCanReceive(): Promise<boolean> {
        const destinationWalletProvider = this.getDestinationWalletProvider();

        return await destinationWalletProvider.isActive();
    }

    /**
     * Transfers the tokens.
     * @pre Destination can receive the tokens.
     * @param amount The amount to transfer.
     * @returns The transfer result.
     */
    async transfer(amount: string): Promise<BridgeTransferResult> {
        const bridgeManager = this.bridgeManagerController.getBridgeManager();

        const originWalletProvider = this.getOriginWalletProvider();
        const destinationWalletProvider = this.getDestinationWalletProvider();

        const result = await bridgeManager.transfer({} as any, originWalletProvider, destinationWalletProvider, amount);
        return result;
    }

    /**
     * Sets a listener for the given event.
     * @param event The event to listen to.
     * @param listener The listener to set.
     * @returns The listener.
     */
    on<Event extends keyof BridgeManagerEvents>(event: Event, listener: BridgeManagerEvents[Event]): () => void {
        const bridgeManager = this.bridgeManagerController.getBridgeManager();
        return bridgeManager.on(event, listener);
    }
}

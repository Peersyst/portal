import { Bridge, BridgeTransferResult, BridgeManagerEvents } from "xchain-sdk";
import { IBridgeTransferController } from "../../../ui/interfaces/i-bridge-transfer.controller";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { IBridgeWalletsController } from "../../../ui/interfaces/i-bridge-wallets.controller";
import { IBridgeManagerController } from "../../../ui/interfaces/i-bridge-manager.controller";
import { IBridgeController } from "../../../ui/interfaces/i-bridge.controller";
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
        private readonly bridgeController: IBridgeController,
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
     * Gets the bridge.
     * @returns The bridge.
     */
    private getBridge(): Bridge {
        const bridge = this.bridgeController.getBridge();
        if (!bridge) throw new DomainError(BridgeTransferErrors.BRIDGE_NOT_SET);
        return bridge;
    }

    /**
     * Swaps the bridge.
     */
    swap(): void {
        this.bridgeChainsController.swap();
        this.bridgeWalletsController.swap();
        this.bridgeController.swap();
    }

    /**
     * Check if the transfer is a create account.
     * @returns True if the transfer can create account, false otherwise.
     */
    transferCanCreateAccount(): boolean {
        const bridge = this.getBridge();

        return bridge.isNativeOriginIssue;
    }

    /**
     * Check if the destination can receive.
     * @returns True if the destination can receive, false otherwise.
     */
    async destinationCanReceive(): Promise<boolean> {
        const destinationWalletProvider = this.getDestinationWalletProvider();

        if (this.transferCanCreateAccount()) return true;
        else return await destinationWalletProvider.isActive();
    }

    /**
     * Transfers the tokens.
     * @pre Destination can receive the tokens.
     * @param amount The amount to transfer.
     * @returns The transfer result.
     */
    async transfer(amount: string): Promise<BridgeTransferResult> {
        const bridgeManager = this.bridgeManagerController.getBridgeManager();

        const bridge = this.getBridge();
        const originWalletProvider = this.getOriginWalletProvider();
        const destinationWalletProvider = this.getDestinationWalletProvider();

        const result = await bridgeManager.transfer(bridge, originWalletProvider, destinationWalletProvider, amount);
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

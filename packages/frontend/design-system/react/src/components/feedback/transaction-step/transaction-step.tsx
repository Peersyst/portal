import { Row } from "@peersyst/react-components";
import { useTheme } from "styled-components";
import { ChainType } from "xchain-sdk";
import { TransactionStepProps } from "./transaction-step.types";
import { useTranslate } from "@frontend/locale/react";
import { ActionStep } from "../action-step";
import { BlockchainAddress } from "../../display/blockchain-address";
import { SignatureIcon } from "../../icons";
import { ChainAddress } from "../../display/chain-address";

export function TransactionStep({ address, chain, transaction, subtitle, ...actionStepProps }: TransactionStepProps): JSX.Element {
    const translate = useTranslate();
    const { spacing } = useTheme();

    return (
        <ActionStep
            subtitle={{
                ...subtitle,
                success: (
                    <Row flex={1} gap={spacing[2]}>
                        <span css={{ fontWeight: 700 }}>
                            {translate(transaction ? "signed" : "alreadySigned", { context: "feminine" })}
                        </span>
                        {transaction && (
                            <BlockchainAddress
                                url={chain.explorerUrl}
                                chainType={chain.type as ChainType}
                                address={transaction.hash}
                                action="link"
                                type="transaction"
                                variant="body1Regular"
                            />
                        )}
                    </Row>
                ),
            }}
            Icon={SignatureIcon}
            {...actionStepProps}
        >
            <ChainAddress address={address} chain={chain} />
        </ActionStep>
    );
}

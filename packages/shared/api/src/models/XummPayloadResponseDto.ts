/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type XummPayloadResponseDto = {
    signer_pubkey?: string;
    hex: string | null;
    txid: string | null;
    resolved_at: string | null;
    dispatched_nodetype: string | null;
    dispatched_to: string | null;
    dispatched_result: string | null;
    dispatched_to_node: boolean | null;
    environment_nodeuri: string | null;
    environment_nodetype: string | null;
    environment_networkid: number | null;
    multisign_account: string | null;
    account: string | null;
    signer: string | null;
    approved_with?: Record<string, any>;
    user: string | null;
};


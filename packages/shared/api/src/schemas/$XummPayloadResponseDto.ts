/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XummPayloadResponseDto = {
    properties: {
        signer_pubkey: {
            type: 'string',
        },
        hex: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        txid: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        resolved_at: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        dispatched_nodetype: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        dispatched_to: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        dispatched_result: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        dispatched_to_node: {
            type: 'boolean',
            isRequired: true,
            isNullable: true,
        },
        environment_nodeuri: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        environment_nodetype: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        environment_networkid: {
            type: 'number',
            isRequired: true,
            isNullable: true,
        },
        multisign_account: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        account: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        signer: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        approved_with: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        user: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
    },
} as const;

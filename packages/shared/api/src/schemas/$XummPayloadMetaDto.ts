/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XummPayloadMetaDto = {
    properties: {
        exists: {
            type: 'boolean',
            isRequired: true,
        },
        uuid: {
            type: 'string',
            isRequired: true,
        },
        multisign: {
            type: 'boolean',
            isRequired: true,
        },
        submit: {
            type: 'boolean',
            isRequired: true,
        },
        pathfinding: {
            type: 'boolean',
            isRequired: true,
        },
        pathfinding_fallback: {
            type: 'boolean',
            isRequired: true,
        },
        force_network: {
            type: 'string',
        },
        destination: {
            type: 'string',
            isRequired: true,
        },
        resolved_destination: {
            type: 'string',
            isRequired: true,
        },
        resolved: {
            type: 'boolean',
            isRequired: true,
        },
        signed: {
            type: 'boolean',
            isRequired: true,
        },
        cancelled: {
            type: 'boolean',
            isRequired: true,
        },
        expired: {
            type: 'boolean',
            isRequired: true,
        },
        pushed: {
            type: 'boolean',
            isRequired: true,
        },
        app_opened: {
            type: 'boolean',
            isRequired: true,
        },
        opened_by_deeplink: {
            type: 'boolean',
            isRequired: true,
            isNullable: true,
        },
        immutable: {
            type: 'boolean',
        },
        forceAccount: {
            type: 'boolean',
        },
        return_url_app: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        return_url_web: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        is_xapp: {
            type: 'boolean',
            isRequired: true,
        },
        signers: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
            isNullable: true,
        },
    },
} as const;

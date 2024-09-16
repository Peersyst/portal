/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XummPayloadPayloadDto = {
    properties: {
        tx_type: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
        tx_destination: {
            type: 'string',
            isRequired: true,
        },
        tx_destination_tag: {
            type: 'number',
            isRequired: true,
            isNullable: true,
        },
        request_json: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
        origintype: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        signmethod: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        created_at: {
            type: 'string',
            isRequired: true,
        },
        expires_at: {
            type: 'string',
            isRequired: true,
        },
        expires_in_seconds: {
            type: 'number',
            isRequired: true,
        },
        computed: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
    },
} as const;

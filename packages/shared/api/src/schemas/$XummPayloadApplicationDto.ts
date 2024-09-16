/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XummPayloadApplicationDto = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        description: {
            type: 'string',
            isRequired: true,
        },
        disabled: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
        uuidv4: {
            type: 'string',
            isRequired: true,
        },
        icon_url: {
            type: 'string',
            isRequired: true,
        },
        issued_user_token: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
    },
} as const;

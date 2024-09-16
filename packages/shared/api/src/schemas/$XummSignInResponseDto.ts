/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XummSignInResponseDto = {
    properties: {
        access_token: {
            type: 'string',
            isRequired: true,
        },
        xummPayload: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
    },
} as const;

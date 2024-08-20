/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ChangePasswordRequest = {
    properties: {
        currentPassword: {
            type: 'string',
            description: `Min 8, at least 1 uppercase, 1 lowercase, 1 special( !@$%^&(){}[]:;<>,.?/~_+-=| ) characters`,
            isRequired: true,
        },
        newPassword: {
            type: 'string',
            description: `at least 8 characters long, 1 uppercase & 1 lowercase letter, 1 number, 1 special character`,
            isRequired: true,
            pattern: '(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\W_]).*',
        },
    },
} as const;

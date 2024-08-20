/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChangePasswordRequest = {
    /**
     * Min 8, at least 1 uppercase, 1 lowercase, 1 special( !@$%^&(){}[]:;<>,.?/~_+-=| ) characters
     */
    currentPassword: string;
    /**
     * at least 8 characters long, 1 uppercase & 1 lowercase letter, 1 number, 1 special character
     */
    newPassword: string;
};


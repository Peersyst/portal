/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransferDto = {
    properties: {
        lockingChainToken: {
            type: 'any-of',
            description: `The token of the locking chain.`,
            contains: [{
                type: 'ERC20TokenDto',
            }, {
                type: 'IOUTokenDto',
            }, {
                type: 'NativeTokenDto',
            }],
            isRequired: true,
        },
        issuingChainToken: {
            type: 'any-of',
            description: `The token of the issuing chain.`,
            contains: [{
                type: 'ERC20TokenDto',
            }, {
                type: 'IOUTokenDto',
            }, {
                type: 'NativeTokenDto',
            }],
            isRequired: true,
        },
        status: {
            type: 'Enum',
            isRequired: true,
        },
        from: {
            type: 'string',
            description: `The address of the sender (event_commit.sender)`,
            isRequired: true,
        },
        to: {
            type: 'string',
            description: `The address of the receiver (event_create_claim.creator)`,
            isRequired: true,
        },
        value: {
            type: 'string',
            description: `The value of the transfer (event_credit.value)`,
            isRequired: true,
        },
        sourceChain: {
            type: 'all-of',
            description: `The id of the mainchain bridge door.`,
            contains: [{
                type: 'ChainDto',
            }],
            isRequired: true,
        },
        destinationChain: {
            type: 'all-of',
            description: `The id of the mainchain bridge door.`,
            contains: [{
                type: 'ChainDto',
            }],
            isRequired: true,
        },
        createdAt: {
            type: 'number',
            description: `The timestamp of the claim transfer`,
            isRequired: true,
        },
        lockingChain: {
            type: 'all-of',
            description: `The locking chain of the transfer bridge door pair.`,
            contains: [{
                type: 'ChainDto',
            }],
            isRequired: true,
        },
        issuingChain: {
            type: 'all-of',
            description: `The issuing chain of the transfer bridge door pair.`,
            contains: [{
                type: 'ChainDto',
            }],
            isRequired: true,
        },
        direction: {
            type: 'Enum',
            isRequired: true,
        },
    },
} as const;

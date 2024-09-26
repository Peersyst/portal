export class BalanceMock {
    value: string;
    currency: string;
    issuer?: string | undefined;

    constructor({ value = "100", currency = "XRP", issuer }: Partial<BalanceMock> = {}) {
        this.value = value;
        this.currency = currency;
        this.issuer = issuer;
    }
}

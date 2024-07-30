import { registerDecorator, ValidationOptions } from "class-validator";
import { isValidAddress } from "xrpl";

export function IsXrpValidAddress(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: "IsXrpValidAddress",
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any): boolean {
                    try {
                        return isValidAddress(value);
                    } catch (e) {
                        return false;
                    }
                },
                defaultMessage() {
                    return "$value is not a valid XRP address";
                },
            },
        });
    };
}

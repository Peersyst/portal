import { IFactory } from "@shared/utils";

export type IDIFactoryInstance<T extends Record<string, any>> = T & {
    create(modules: Record<keyof T, (resolve: T) => T[keyof T]>): IFactory<T>;
};

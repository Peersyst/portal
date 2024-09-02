import { Singleton, ISingleton } from "../../common/utils/singleton/singleton";

export interface IRepository<T extends { new (...args: any[]): {} } = any> extends ISingleton<T> {}

export function Repository(): <T extends { new (...args: any[]): {} }>(constructor: T) => IRepository<T> {
    return function Repository<T extends { new (...args: any[]): {} }>(constructor: T): IRepository<T> {
        return Singleton()<T>(constructor);
    };
}

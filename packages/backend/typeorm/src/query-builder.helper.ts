import { DeleteQueryBuilder, EntityManager, EntityTarget, ObjectLiteral, Repository, SelectQueryBuilder } from "typeorm";
import { OrderType } from "@shared/utils";

export enum NullsPosition {
    NULLS_FIRST = "NULLS FIRST",
    NULLS_LAST = "NULLS LAST",
}

export interface QBOrder<T = string> {
    field: T;
    type?: OrderType;
    nullsPosition?: NullsPosition;
}

export interface QBFilter<Order = unknown> {
    relations: (string | Relation)[];
    qbWheres: QBWhere[];
    qbOrders?: QBOrder<Order>[];
}

export type ValueType = string | number | boolean | string[] | number[] | Date;

export enum FilterType {
    EQUAL = "=",
    NOT_EQUAL = "!=",
    MORE_THAN = ">",
    MORE_THAN_EQUAL = ">=",
    LESS_THAN = "<",
    LESS_THAN_EQUAL = "<=",
    IN = "IN",
    LIKE = "LIKE",
    NULL = "IS NULL",
    NOT_NULL = "IS NOT NULL",
}

export interface QBWhere {
    field: string;
    operator: FilterType;
    value?: ValueType;
}

export enum RelationType {
    INNER = "INNER_JOIN",
    LEFT = "LEFT_JOIN",
}

export interface Relation {
    value: string;
    type: RelationType;
    select: boolean;
}

export interface QBFrom<T> {
    entityTarget: EntityTarget<T>;
    alias: string;
}

export class QueryBuilderHelper {
    /**
     * Adds relations to the query builder.
     * @param qb The query builder.
     * @param alias The alias.
     * @param relations The relations.
     * @returns The query builder.
     */
    private static addRelations<T extends ObjectLiteral>(
        qb: SelectQueryBuilder<T>,
        alias: string,
        relations: (string | Relation)[] = [],
    ): SelectQueryBuilder<T> {
        for (const relation of relations) {
            const aliases = (typeof relation === "string" ? relation : relation.value).split(".");
            const finalAlias = aliases.length > 1 ? aliases[aliases.length - 2] : alias;
            const finalRelation = aliases[aliases.length - 1];

            if (typeof relation === "string") {
                qb = qb.leftJoinAndSelect(`${finalAlias}.${finalRelation}`, relation);
            } else if (relation.select && relation.type === RelationType.INNER) {
                qb = qb.innerJoinAndSelect(`${finalAlias}.${finalRelation}`, relation.value);
            } else if (!relation.select && relation.type === RelationType.INNER) {
                qb = qb.innerJoin(`${finalAlias}.${finalRelation}`, relation.value);
            } else if (relation.select && relation.type === RelationType.LEFT) {
                qb = qb.leftJoinAndSelect(`${finalAlias}.${finalRelation}`, relation.value);
            } else if (!relation.select && relation.type === RelationType.LEFT) {
                qb = qb.leftJoin(`${finalAlias}.${finalRelation}`, relation.value);
            }
        }
        return qb;
    }

    /**
     * Adds where clauses to the query builder.
     * @param qb The query builder.
     * @param wheres The where clauses.
     * @param alias The alias.
     * @returns The query builder.
     */
    private static addWheres<T extends ObjectLiteral>(
        qb: SelectQueryBuilder<T> | DeleteQueryBuilder<T>,
        wheres: QBWhere[] = [],
        alias: string,
    ): SelectQueryBuilder<T> | DeleteQueryBuilder<T> {
        let varIdx = 0;

        for (const qbWhere of wheres) {
            const key = `${alias}${varIdx}`;
            if ([FilterType.NULL, FilterType.NOT_NULL].includes(qbWhere.operator)) {
                qb = qb.andWhere(`${qbWhere.field} ${qbWhere.operator}`);
            } else if (qbWhere.operator === FilterType.IN) {
                qb = qb.andWhere(`${qbWhere.field} IN (:...${key})`, { [key]: qbWhere.value });
                varIdx += 1;
            } else if (qbWhere.operator === FilterType.LIKE) {
                qb = qb.andWhere(`${qbWhere.field} LIKE :${key}`, { [key]: `%${qbWhere.value}%` });
                varIdx += 1;
            } else {
                qb = qb.andWhere(`${qbWhere.field} ${qbWhere.operator} :${key}`, { [key]: qbWhere.value });
                varIdx += 1;
            }
        }

        return qb;
    }

    /**
     * Adds order clauses to the query builder.
     * @param qb The query builder.
     * @param orders The order clauses.
     * @returns The query builder.
     */
    private static addOrders<T extends ObjectLiteral>(qb: SelectQueryBuilder<T>, orders: QBOrder[] = []): SelectQueryBuilder<T> {
        for (const order of orders) {
            if (order.type && order.nullsPosition) {
                qb = qb.addOrderBy(order.field, order.type, order.nullsPosition);
            } else if (order.type) {
                qb = qb.addOrderBy(order.field, order.type);
            } else {
                qb = qb.addOrderBy(order.field);
            }
        }
        return qb;
    }

    /**
     * Adds an offset to the query builder.
     * @param qb The query builder.
     * @param offset The offset.
     * @returns The query builder.
     */
    private static addOffset<T extends ObjectLiteral>(qb: SelectQueryBuilder<T>, offset?: number): SelectQueryBuilder<T> {
        if (typeof offset === "number" && offset > 0 && Number.isInteger(offset)) {
            qb = qb.offset(offset);
        }
        return qb;
    }

    /**
     * Adds a limit to the query builder.
     * @param qb The query builder.
     * @param limit The limit.
     * @returns The query builder.
     */
    private static addLimit<T extends ObjectLiteral>(qb: SelectQueryBuilder<T>, limit?: number): SelectQueryBuilder<T> {
        if (typeof limit === "number" && limit > 0 && Number.isInteger(limit)) {
            qb = qb.limit(limit);
        }
        return qb;
    }

    /**
     * Adds a select clause to the query builder.
     * @param qb The query builder.
     * @param select The select clause.
     * @returns The query builder.
     */
    private static addSelect<T extends ObjectLiteral>(qb: SelectQueryBuilder<T>, select: string | string[] = []): SelectQueryBuilder<T> {
        if (typeof select === "string") {
            qb = qb.select(select);
        } else if (select.length > 0) {
            qb = qb.select(select);
        }
        return qb;
    }

    /**
     * Adds from clauses to the query builder.
     * @param qb The query builder.
     * @param froms The from clauses.
     * @returns The query builder.
     */
    private static addFroms<T extends ObjectLiteral>(qb: SelectQueryBuilder<T>, froms: QBFrom<T>[] = []): SelectQueryBuilder<T> {
        if (froms.length === 1) {
            qb = qb.from(froms[0].entityTarget, froms[0].alias);
        } else if (froms.length > 1) {
            for (const from of froms) {
                qb = qb.addFrom(from.entityTarget, from.alias);
            }
        }
        return qb;
    }

    /**
     * Adds group by clauses to the query builder.
     * @param qb The query builder.
     * @param groupBys The group by clauses.
     * @returns The query builder.
     */
    private static addGroupBys<T extends ObjectLiteral>(qb: SelectQueryBuilder<T>, groupBys: string[] = []): SelectQueryBuilder<T> {
        for (const groupBy of groupBys) {
            qb = qb.addGroupBy(groupBy);
        }
        return qb;
    }

    /**
     * Adds parameters to the query builder.
     * @param qb The query builder.
     * @param parameters The parameters.
     * @returns The query builder.
     */
    private static addParameters<T extends ObjectLiteral>(qb: SelectQueryBuilder<T>, parameters?: ObjectLiteral): SelectQueryBuilder<T> {
        if (parameters) {
            qb = qb.setParameters(parameters);
        }
        return qb;
    }

    /**
     * Builds a delete query.
     * @param repository The repository.
     * @param entity The entity.
     * @param from The from.
     * @param wheres The where clauses.
     * @returns The query builder.
     */
    public static async buildDelete<T extends ObjectLiteral>(
        repository: Repository<T>,
        entity: EntityTarget<T>,
        from: string,
        wheres: QBWhere[] = [],
    ): Promise<void> {
        let qb = repository.createQueryBuilder().delete().from(entity, from);
        qb = QueryBuilderHelper.addWheres<T>(qb, wheres, "delete") as DeleteQueryBuilder<T>;
        await qb.execute();
    }

    /**
     * Builds a query.
     * @param repository The repository.
     * @param alias The alias.
     * @param select The select clause.
     * @param from The from clauses.
     * @param relations The relations.
     * @param wheres The where clauses.
     * @param orders The order clauses.
     * @param groupBys The group by clauses.
     * @param parameters The parameters.
     * @param offset The offset.
     * @param limit The limit.
     * @returns The query builder.
     */
    public static buildQuery<T extends ObjectLiteral>(
        repository: Repository<T> | EntityManager,
        alias = "table",
        select: string[] | string = [],
        from: QBFrom<T>[] = [],
        relations: (string | Relation)[] = [],
        wheres: QBWhere[] = [],
        orders: QBOrder[] = [],
        groupBys: string[] = [],
        parameters?: ObjectLiteral,
        offset?: number,
        limit?: number,
    ): SelectQueryBuilder<T> {
        let qb: SelectQueryBuilder<any>;
        if (repository instanceof EntityManager) {
            qb = repository.createQueryBuilder();
        } else {
            qb = repository.createQueryBuilder(alias);
        }
        qb = QueryBuilderHelper.addSelect<T>(qb, select);
        qb = QueryBuilderHelper.addFroms<T>(qb, from);
        qb = QueryBuilderHelper.addRelations<T>(qb, alias, relations);
        qb = QueryBuilderHelper.addWheres<T>(qb, wheres, alias) as SelectQueryBuilder<T>;
        qb = QueryBuilderHelper.addOrders<T>(qb, orders);
        qb = QueryBuilderHelper.addGroupBys<T>(qb, groupBys);
        qb = QueryBuilderHelper.addOffset<T>(qb, offset);
        qb = QueryBuilderHelper.addLimit<T>(qb, limit);
        qb = QueryBuilderHelper.addParameters<T>(qb, parameters);

        return qb;
    }

    /**
     * Builds a query and returns raw results.
     * @param repository The repository.
     * @param alias The alias.
     * @param select The select clause.
     * @param from The from clauses.
     * @param relations The relations.
     * @param wheres The where clauses.
     * @param orders The order clauses.
     * @param groupBys The group by clauses.
     * @param parameters The parameters.
     * @returns The query builder.
     */
    public static async buildFindRawMany<T extends ObjectLiteral, S>(
        repository: Repository<T> | EntityManager,
        alias = "table",
        select: string[] | string = [],
        from: QBFrom<T>[] = [],
        relations: (string | Relation)[] = [],
        wheres: QBWhere[] = [],
        orders: QBOrder[] = [],
        groupBys: string[] = [],
        parameters?: ObjectLiteral,
    ): Promise<S[]> {
        const qb = QueryBuilderHelper.buildQuery(repository, alias, select, from, relations, wheres, orders, groupBys, parameters);
        return qb.getRawMany<S>();
    }

    /**
     * Builds a query and returns a tuple of results and count.
     * @param repository The repository.
     * @param alias The alias.
     * @param offset The offset.
     * @param limit The limit.
     * @param relations The relations.
     * @param wheres The where clauses.
     * @param orders The order clauses.
     * @returns The query builder.
     */
    public static async buildFindManyAndCount<T extends ObjectLiteral>(
        repository: Repository<T> | EntityManager,
        alias = "table",
        offset?: number,
        limit?: number,
        relations: (string | Relation)[] = [],
        wheres: QBWhere[] = [],
        orders: QBOrder[] = [],
    ): Promise<[T[], number]> {
        const qb = QueryBuilderHelper.buildQuery(repository, alias, [], [], relations, wheres, orders, [], undefined, offset, limit);
        return qb.getManyAndCount();
    }
}

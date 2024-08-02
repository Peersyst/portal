import { User } from "@peersyst/database";
import { ConfigEnvType } from "@peersyst/env-config";
import { UserType } from "@peersyst/auth-module";
import { hashSync } from "bcrypt";
import { DeepPartial } from "typeorm";

const devUsers: DeepPartial<User>[] = [
    {
        id: 1,
        email: "acarrera@peersyst.com",
        type: UserType.USER,
        name: "Adrià Carrera",
        phone: "+37698735",
        country: "AD",
        password: hashSync("123qweQWE!", 10),
        address: "rf4VZ6LYKnPY1uaEiZF8qzD8vrW91vvjbb",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        email: "jgrau@peersyst.com",
        type: UserType.USER,
        name: "Joan Grau",
        phone: "+34678936525",
        country: "ES",
        password: hashSync("123qweQWE!", 10),
        address: "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        email: "ggarcia@peersyst.com",
        type: UserType.USER,
        name: "Guillem Garcia",
        phone: "+34678936524",
        country: "ES",
        password: hashSync("PassPort1.", 10),
        address: "rnGUZ6FzJyazXqkqBheSQdw7c5JfohZafv",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const previewUsers = [];

const prodUsers = [];

export default function getByEnv(env: ConfigEnvType): DeepPartial<User>[] {
    if (env === "production") {
        return prodUsers;
    }
    if (env === "preview") {
        return previewUsers;
    }
    return devUsers;
}

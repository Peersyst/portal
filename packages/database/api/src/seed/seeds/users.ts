import { Seed } from "@database/seed";
import { User } from "../../entities/user.tmp";

export const users = new Seed(User, {
    development: [
        {
            id: 1,
            email: "developer@peersyst.com",
            name: "Developer",
            address: "r123456789",
            phone: "123456789",
            country: "AD",
            password: "7498hfr9vr1hwpdvnoefjnv",
            emailVerified: true,
        },
    ],
});

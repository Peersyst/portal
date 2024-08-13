import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User, UserType } from "@database/api/entities";
import UserEntityMock from "../../mocks/user/user-entity.mock";
import { UserService } from "../../../src/modules/user/user.service";
import { ErrorCode } from "../../../src/modules/common/exception/error-codes";

describe("UserService", () => {
    let userService: UserService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                {
                    provide: getRepositoryToken(User),
                    useValue: UserEntityMock,
                },
                UserService,
            ],
        }).compile();
        userService = module.get<UserService>(UserService);
    });

    describe("on createUser", () => {
        it("should create a user", async () => {
            const user = await userService.createUser({ email: "new@example.com", password: "password" });
            expect(user.type).toEqual(UserType.USER);
            expect(user.email).toEqual("user@example.com");
        });

        it("should throw email already taken exception", async () => {
            await expect(userService.createUser({ email: "user@example.com", password: "password" })).rejects.toThrow(
                ErrorCode.EMAIL_ALREADY_TAKEN,
            );
        });
    });

    describe("on findAll", () => {
        it("should find all users", async () => {
            const users = await userService.findAll();
            expect(users.length).toEqual(1);
        });
    });

    describe("on findById", () => {
        it("should find a user by id", async () => {
            const user = await userService.findById(1);
            expect(user.id).toEqual(1);
        });

        it("should not find a user by id", async () => {
            await expect(userService.findById(2)).rejects.toThrow(ErrorCode.USER_NOT_FOUND);
        });
    });

    describe("on userEmailPasswordMatch", () => {
        it("should match passwords", async () => {
            const user = await userService.userEmailPasswordMatch("user@example.com", "strinG1!");
            expect(user).not.toBeNull();
        });

        it("should not match passwords", async () => {
            const user = await userService.userEmailPasswordMatch("user@example.com", "password");
            expect(user).toBeNull();
        });

        it("should throw user not found when matching passwords", async () => {
            await expect(userService.userEmailPasswordMatch("not@example.com", "")).rejects.toThrow(ErrorCode.USER_NOT_FOUND);
        });
    });
});

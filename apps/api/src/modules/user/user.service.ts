import { compare, hash } from "bcrypt";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserRequest } from "./create-user.request";
import { UserDto } from "./user.dto";
import { AuthUserServiceI } from "@peersyst/auth-module";
import { BusinessException } from "../common/exception/business.exception";
import { ErrorCode } from "../common/exception/error-codes";
import { User, UserType } from "@database/api/entities";

@Injectable()
export class UserService implements AuthUserServiceI {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    /**
     * Creates a new user.
     * @param createUserRequest The request to create a new user.
     * @returns The created user.
     */
    async createUser(createUserRequest: CreateUserRequest): Promise<UserDto> {
        const existingUser = await this.userRepository.findOne({ where: { email: createUserRequest.email } });
        if (existingUser) {
            throw new BusinessException(ErrorCode.EMAIL_ALREADY_TAKEN);
        }
        const entity = await this.userRepository.save({
            ...createUserRequest,
            type: UserType.USER,
            password: await hash(createUserRequest.password, 10),
        });

        return UserDto.fromEntity(entity);
    }

    /**
     * Finds all users.
     * @returns All users.
     */
    async findAll(): Promise<UserDto[]> {
        const entities = await this.userRepository.find();
        return entities.map((entity) => UserDto.fromEntity(entity));
    }

    /**
     * Finds a user by id.
     * @param id The id of the user to find.
     * @returns The user.
     */
    async findById(id: number): Promise<UserDto> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new BusinessException(ErrorCode.USER_NOT_FOUND);
        }
        return UserDto.fromEntity(user);
    }

    /**
     * Checks if the email and password match.
     * @param email The email of the user.
     * @param plainPassword The plain password of the user.
     * @returns The user if the email and password match. Otherwise, it returns null.
     */
    async userEmailPasswordMatch(email: string, plainPassword: string): Promise<UserDto | null> {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new BusinessException(ErrorCode.USER_NOT_FOUND);
        }
        const result = await compare(plainPassword, user.password);
        if (result) {
            return UserDto.fromEntity(user);
        }
        return null;
    }
}

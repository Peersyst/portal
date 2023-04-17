import { CreateUserRequest, UserDto } from "common/models";

export interface IUserAPI {
    create(requestBody: CreateUserRequest): Promise<UserDto>;
    info(): Promise<UserDto>;
    findAll(): Promise<Array<UserDto>>;
}

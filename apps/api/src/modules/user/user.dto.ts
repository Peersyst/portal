import { PrivateAuthUserDtoI } from "@peersyst/auth-module";
import { User, UserType } from "@database/api/entities";

export class UserDto implements PrivateAuthUserDtoI {
    public id: number;
    public email: string;
    public type: UserType;

    /**
     * Converts a User entity to a UserDto.
     * @param user The user to convert to a UserDto.
     * @returns A UserDto.
     */
    static fromEntity(user: User): UserDto {
        return {
            id: user.id,
            email: user.email,
            type: user.type,
        };
    }
}

import { PrivateAuthUserDtoI, UserType } from "@peersyst/auth-module";
import { User } from "@database/api/entities";

export class UserDto implements PrivateAuthUserDtoI {
    id: number;
    email: string;
    type: UserType;

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

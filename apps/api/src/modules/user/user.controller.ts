import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Authenticated, UserType } from "@peersyst/auth-module";
import { CreateUserRequest } from "./create-user.request";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { ApiErrorDecorators } from "../common/exception/error-response.decorator";

@ApiTags("user")
@Controller("users")
@ApiErrorDecorators()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("create")
    @ApiOperation({ summary: "Create user" })
    async create(@Body() createUserRequestDto: CreateUserRequest): Promise<UserDto> {
        return this.userService.createUser(createUserRequestDto);
    }

    @Get("info")
    @ApiOperation({ summary: "Show user info" })
    @Authenticated()
    async info(@Request() req: any): Promise<UserDto> {
        return this.userService.findById(req.user.id);
    }

    @Get("all")
    @ApiOperation({ summary: "Find all users" })
    @Authenticated(UserType.ADMIN)
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }
}

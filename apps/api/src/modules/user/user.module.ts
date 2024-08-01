import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { User } from "@peersyst/database";
import { UserController } from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, { provide: "UserService", useClass: UserService }],
    controllers: [UserController],
    exports: [UserService, { provide: "UserService", useClass: UserService }],
})
export class UserModule {}

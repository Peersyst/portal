import { Entity, Column, Index, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AuthUserI, UserType, ValidateEmailUserI } from "@peersyst/auth-module";

export { UserType };

@Entity("user")
export class User implements AuthUserI, ValidateEmailUserI {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { unique: true, length: 255 })
    @Index()
    email!: string;

    @Column("varchar")
    name!: string;

    @Column("text", { name: "avatar_url", nullable: true, default: null })
    avatarUrl?: string;

    @Column("varchar", { unique: true, length: 255, nullable: true })
    address?: string;

    @Column("varchar", { length: 255, unique: true })
    phone!: string;

    @Column("varchar", { length: 255 })
    country!: string;

    @Column("varchar", { length: 255 })
    password!: string;

    @Column("boolean", { name: "email_verified", default: false })
    emailVerified = false;

    @Column({
        type: "enum",
        enum: UserType,
        default: UserType.USER,
    })
    type!: UserType;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp",
    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp",
    })
    updatedAt!: Date;
}

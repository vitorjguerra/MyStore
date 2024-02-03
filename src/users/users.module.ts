/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { IsEmailUnicValidator } from "./validation/is-email-unic.validator";

@Module({
    controllers: [UserController],
    providers: [UsersRepository, IsEmailUnicValidator]
})

export class UsersModule { }
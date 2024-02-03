/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailIsUnic } from "../validation/is-email-unic.validator";

export class UpdateUsersDTO {

    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsEmail()
    @EmailIsUnic({ message: 'Email already in use' })
    @IsOptional()
    email: string;

    @MinLength(6)
    @IsOptional()
    password: string;
}
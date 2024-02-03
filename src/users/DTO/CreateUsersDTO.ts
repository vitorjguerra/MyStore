/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailIsUnic } from "../validation/is-email-unic.validator";

export class CreateUsersDTO {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    @EmailIsUnic({ message: 'Email already in use' })
    email: string;

    @MinLength(6)
    password: string;
}
/* eslint-disable prettier/prettier */
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsersRepository } from "../users.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUnicValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UsersRepository) {

    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {

        const existsUsersWithThisEmail = await this.userRepository.existsUsersWithThisEmail(value)
        return !existsUsersWithThisEmail;
    }
}

export const EmailIsUnic = (validationOptions: ValidationOptions) => {
    return (object: object, properties: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: properties,
            options: validationOptions,
            constraints: [],
            validator: IsEmailUnicValidator
        })
    }
}
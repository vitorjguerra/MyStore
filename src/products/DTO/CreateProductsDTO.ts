/* eslint-disable prettier/prettier */

import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID, IsUrl, MaxLength, Min, ValidateNested } from "class-validator";

export class ProductsCharacteristicsDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class ProductsImagesDTO {
    @IsUrl(undefined, { message: 'URL for a valid image' })
    url: string;

    @IsString()
    @IsNotEmpty()
    description: string;

}

export class CreateProductsDTO {
    @IsUUID(undefined, { message: 'Invalid UUID' })
    userId: string;

    @IsString()
    @IsNotEmpty()
    name: string;


    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1)
    value: number;

    @IsNumber()
    @Min(0)
    availableQuantity: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => ProductsCharacteristicsDTO)
    characteristics: ProductsCharacteristicsDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductsImagesDTO)
    images: ProductsImagesDTO[];

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsDateString()
    creationDate: Date;

    @IsDateString()
    updateDate: Date;
}
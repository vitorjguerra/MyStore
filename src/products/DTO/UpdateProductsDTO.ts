/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min, ValidateNested, } from 'class-validator';
import { ProductsCharacteristicsDTO, ProductsImagesDTO } from './CreateProductsDTO';


export class UpdateProductsDTO {

    @IsUUID(undefined, { message: 'Invalid ID' })
    id: string;

    @IsUUID(undefined, { message: 'Invalid User ID' })
    userId: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @IsOptional()
    @Min(1)
    @IsOptional()
    value: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    availableQuantity: number;

    @IsString()
    @IsOptional()
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => ProductsCharacteristicsDTO)
    @IsOptional()
    characteristics: ProductsCharacteristicsDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductsImagesDTO)
    @IsOptional()
    images: ProductsImagesDTO[];

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    category: string;

    @IsDateString()
    @IsOptional()
    creationDate: Date;

    @IsDateString()
    @IsOptional()
    updateDate: Date;
}
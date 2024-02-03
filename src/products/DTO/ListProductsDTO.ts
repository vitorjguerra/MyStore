/* eslint-disable prettier/prettier */

export class ListProductsCharacteristicsDTO {
    name: string;
    description: string;
}

export class ListProductsImagesDTO {
    url: string;
    description: string;
}

export class ListProductsDTO {
    id: string;
    userId: string;
    name: string;
    value: number;
    availableQuantity: number;
    description: string;
    characteristics: ListProductsCharacteristicsDTO[];
    images: ListProductsImagesDTO[];
    category: string;
    creationDate: Date;
    updateDate: Date;
}
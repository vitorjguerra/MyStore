/* eslint-disable prettier/prettier */


export class ProductsCharacteristicsDTO {
    name: string;
    description: string;
}

export class ProductsImagesDTO {
    url: string;
    description: string;
}

export class ProductsEntity {
    id: string;
    userId: string;
    name: string;
    value: number;
    availableQuantity: number;
    description: string;
    characteristics: ProductsCharacteristicsDTO[];
    images: ProductsImagesDTO[];
    category: string;
    creationDate: Date;
    updateDate: Date;
}
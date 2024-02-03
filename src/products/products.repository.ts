/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { ProductsEntity } from "./products.entity";

@Injectable()
export class ProductsRepository {

    private products: ProductsEntity[] = [];

    async save(products: ProductsEntity) {
        this.products.push(products);
    }

    async list() {
        return this.products;
    }

    private searchForId(id: string) {
        const possibleProduct = this.products.find((products) => products.id === id);

        if (!possibleProduct) {
            throw new Error('Product doesnt exist');
        }

        return possibleProduct;
    }

    async update(id: string, productsData: Partial<ProductsEntity>) {

        const nomUpdatedData = ['id', 'userId'];
        const products = this.searchForId(id);

        Object.entries(productsData).forEach(([key, value]) => {
            if (nomUpdatedData.includes(key)) {
                return;
            }
            products[key] = value
        });

        return products;
    }

    async delete(id: string) {
        const deletedProducts = this.searchForId(id);
        this.products = this.products.filter((product) => product.id !== id);
        return deletedProducts;
    }

}
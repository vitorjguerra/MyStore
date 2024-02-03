/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { ProductsEntity } from "./products.entity";
import { CreateProductsDTO } from "./DTO/CreateProductsDTO";
import { randomUUID } from "crypto";
import { UpdateProductsDTO } from "./DTO/UpdateProductsDTO";

@Controller('/products')
export class ProductsController {

    constructor(private productsRepository: ProductsRepository) { }

    @Post()
    async createProducts(@Body() productsData: CreateProductsDTO) {
        const products = new ProductsEntity();

        products.id = randomUUID();
        products.name = productsData.name;
        products.userId = productsData.userId;
        products.value = productsData.value;
        products.availableQuantity = productsData.availableQuantity;
        products.description = productsData.description;
        products.category = productsData.category;
        products.characteristics = productsData.characteristics;
        products.images = productsData.images;
        products.updateDate = productsData.updateDate;
        products.creationDate = productsData.creationDate;

        const newProducts = this.productsRepository.save(products)
        return newProducts

    }

    @Get()
    async listProducts() {
        return this.productsRepository.list();
    }

    @Put('/:id')
    async UpdateProducts(@Param('id') id: string, @Body() productsData: UpdateProductsDTO,) {
        const updatedProducts = await this.productsRepository.update(id, productsData)

        return {
            message: 'Product update successfully',
            produto: updatedProducts
        }
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        const deletedProducts = await this.productsRepository.delete(id);

        return {
            mensagem: 'produto removido com sucesso',
            produto: deletedProducts,
        };
    }
}

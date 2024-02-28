import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/products.model';
import { Category } from '../categories/models/category.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product) private readonly productRepository: typeof Product,
    ) {}

    async createProduct(dto: CreateProductDTO): Promise<CreateProductDTO> {
        await this.productRepository.create({
            productName: dto.productName,
            productPhoto: dto.productPhoto,
            loadCapacity: dto.loadCapacity,
            liftingHeight: dto.liftingHeight,
            arrowLength: dto.arrowLength,
            categoryId: dto.categoryId,
        });
        return dto;
    }

    async deleteProduct (id: number): Promise<boolean> {
        await this.productRepository.destroy({where: {id}})
        return true
    }
}
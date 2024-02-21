import { Injectable } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/products.model';
import { BadRequestException } from '@nestjs/common';
import { AppErrors } from 'src/common/constants/errors';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product) private readonly productRepository: typeof Product) {}

    async createProduct(dto: CreateProductDTO): Promise<CreateProductDTO> {
        await this.productRepository.create({
            productName: dto.productName,
            productPhoto: dto.productPhoto,
            loadCapacity: dto.loadCapacity,
            liftingHeight: dto.liftingHeight,
            arrowLength: dto.arrowLength,
        });
        return dto;
    }

    async updateProduct (productName:string, dto: UpdateProductDTO): Promise<UpdateProductDTO> {
        await this.productRepository.update(dto, {where: {productName}})
        return dto
    }

    async deleteProduct (productName: string): Promise<boolean> {
        await this.productRepository.destroy({where: {productName}})
        return true
    }
}

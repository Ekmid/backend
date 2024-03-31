import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateProductDTO } from '../../dto/create-product-dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../../models/products.model';
import { Category } from '../../models/category.model';
import { CategoryService } from '../categories/category.service';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product) private readonly productRepository: typeof Product,
        private readonly categoryService: CategoryService
    ) {}

    async createProduct(dto: CreateProductDTO): Promise<CreateProductDTO> {
        const categoryExists = await this.categoryService.getCategory(dto.categoryId);
        if (!categoryExists) {
            throw new NotFoundException(`Category with id ${dto.categoryId} not found`);
        }
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

    async getProduct(id: number): Promise<Product> {
        if (!id) {
            throw new BadRequestException('ID parameter is required');
        }

        const product = await this.productRepository.findOne({where: {id}, include: [Category]});
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return product;
    }

    async getAllProducts(): Promise<Product[]> {
        const productCount = await this.productRepository.count();
        
        if (productCount > 0) {
            return await this.productRepository.findAll();
        } else {
            return [];
        }
    }
}
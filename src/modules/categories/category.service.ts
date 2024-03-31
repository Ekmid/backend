import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../../models/category.model';
import { CreateCategoryDTO } from '../../dto/create-category-dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category) private readonly categoryRepository: typeof Category) {}

    async createCategory(dto: CreateCategoryDTO): Promise<CreateCategoryDTO> {
        await this.categoryRepository.create({
            categoryName: dto.categoryName
        })
        return dto
    }

    async deleteCategory (categoryName: string): Promise<boolean> {
        await this.categoryRepository.destroy({where: {categoryName}})
        return true
    }

    async getCategory(id: number): Promise<Category> {
        const category = await this.categoryRepository.findByPk(id);
        if (!category) {
            throw new NotFoundException(`Category with id ${id} not found`);
        }
        return category;
    }

    async getAllCategories(): Promise<Category[]> {
        return await this.categoryRepository.findAll();
    }
}
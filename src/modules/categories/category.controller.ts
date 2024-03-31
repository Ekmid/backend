import { Controller, Post, Delete, Body, UseGuards, Param, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from '../../dto/create-category-dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRole } from 'src/guards/user-role';
import { RolesGuard } from 'src/guards/roles-guard';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { Category } from 'src/models/category.model';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @ApiTags("Category")
    @ApiResponse({ status: 201, type: CreateCategoryDTO })
    @Post('create-category')
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    createCategory(@Body() dto: CreateCategoryDTO): Promise<CreateCategoryDTO> {
        return this.categoryService.createCategory(dto)
    }

    @ApiTags("Category")
    @ApiResponse({ status: 204 })
    @Delete('delete-category')
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    deleteCategory(@Param('categoryName') categoryName: string): Promise<boolean> {
        return this.categoryService.deleteCategory(categoryName);
    }

    @ApiTags("Category")
    @ApiResponse({status: 200})
    @ApiBearerAuth('JWT-auth')
    @UseGuards(JwtAuthGuard)
    @Get('all-products')
    getAllProducts(): Promise<Category[]> {
        return this.categoryService.getAllCategories();
    }

}
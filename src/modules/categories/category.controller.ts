import { Controller, Post, Delete, Body, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { LocalAuthGuard } from 'src/guards/local-guard';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @ApiTags("Create/delete category")
    @ApiResponse({ status: 201, type: CreateCategoryDTO })
    @Post('create-category')
<<<<<<< HEAD
    register(@Body() dto: CreateCategoryDTO): Promise<CreateCategoryDTO> {
=======
    @ApiBearerAuth('JWT-auth')
    register (@Body() dto: CreateCategoryDTO): Promise<CreateCategoryDTO> {
>>>>>>> 015f5955ef17a71ebc0cd7fa54f1691ef7383458
        return this.categoryService.createCategory(dto)
    }

    @ApiTags("Create/delete category")
    @ApiResponse({ status: 204 })
    @Delete('delete-category')
<<<<<<< HEAD
=======
    @ApiBearerAuth('JWT-auth')
>>>>>>> 015f5955ef17a71ebc0cd7fa54f1691ef7383458
    deleteCategory(@Body('categoryName') categoryName: string): Promise<boolean> {
        return this.categoryService.deleteCategory(categoryName);
    }
}
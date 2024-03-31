import { Controller, Body, Post, Delete, Param, Get, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProductDTO } from '../../dto/create-product-dto';
import { Product } from '../../models/products.model';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRole } from 'src/guards/user-role';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { RolesGuard } from 'src/guards/roles-guard';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @ApiTags("Product")
    @ApiResponse({status: 201, type: CreateProductDTO})
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create-product')
    createProduct(@Body() dto: CreateProductDTO): Promise<CreateProductDTO> {
        return this.productService.createProduct(dto)
    }

    @ApiTags("Product")
    @ApiResponse({status: 204})
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete-product')
    deleteProduct(@Param('id') id: number): Promise<boolean> {
        return this.productService.deleteProduct(id);
    }


    @ApiTags("Product")
    @ApiResponse({status: 200})
    @ApiBearerAuth('JWT-auth')
    @UseGuards(JwtAuthGuard)
    @Get('all')
    getAllProducts(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }

    @ApiTags("Product")
    @ApiResponse({status: 200})
    @ApiBearerAuth('JWT-auth')
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getProduct(@Param('id') id: number): Promise<Product> {
        return this.productService.getProduct(id);
    } 
}

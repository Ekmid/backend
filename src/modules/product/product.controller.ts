import { Controller, Body, Post, Delete, Param, Get, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProductDTO } from '../../dto/create-product-dto';
import { Product } from '../../models/products.model';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from "src/modules/auth/enum/role.enum"
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { RolesGuard } from 'src/guards/roles-guard';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @ApiTags("Products")
    @ApiResponse({ status: 201, type: CreateProductDTO })
    // @Roles(Role.Admin)
    @Post('create-product')
    createProduct(@Body() dto: CreateProductDTO): Promise<CreateProductDTO> {
        return this.productService.createProduct(dto)
    }

    @ApiTags("Products")
    @ApiResponse({ status: 204 })
    // @Roles(Role.Admin)
    @Delete('delete-product')
    deleteProduct(@Param('id') id: number): Promise<boolean> {
        return this.productService.deleteProduct(id);
    }


    @ApiTags("Products")
    @ApiResponse({ status: 200 })
    @ApiBearerAuth('JWT-auth')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get('/')
    getAllProducts(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }

    @ApiTags("Products")
    @ApiResponse({ status: 200 })
    // @ApiBearerAuth('JWT-auth')
    // @UseGuards(JwtAuthGuard)
    @Get(':id')
    getProduct(@Param('id') id: number): Promise<Product> {
        return this.productService.getProduct(id);
    }
}

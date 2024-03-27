import { Controller, Body, Post, Delete, UseGuards, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProductDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @ApiTags("Product")
<<<<<<< HEAD
    @ApiResponse({ status: 201, type: CreateProductDTO })
=======
    @ApiResponse({status: 201, type: CreateProductDTO})
    @ApiBearerAuth('JWT-auth')
>>>>>>> 015f5955ef17a71ebc0cd7fa54f1691ef7383458
    @Post('create-product')
    @ApiBearerAuth('JWT-auth')
    createProduct(@Body() dto: CreateProductDTO): Promise<CreateProductDTO> {
        return this.productService.createProduct(dto)
    }

    @ApiTags("Product")
<<<<<<< HEAD
    @ApiResponse({ status: 204 })
=======
    @ApiResponse({status: 204})
    @ApiBearerAuth('JWT-auth')
>>>>>>> 015f5955ef17a71ebc0cd7fa54f1691ef7383458
    @Delete('delete-product')
    @ApiBearerAuth('JWT-auth')
    deleteProduct(@Param('id') id: number): Promise<boolean> {
        return this.productService.deleteProduct(id);
    }
}

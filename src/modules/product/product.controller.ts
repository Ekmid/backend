import { Controller, Body, Post, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProductDTO } from './dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @ApiTags("Product")
    @ApiResponse({status: 201, type: CreateProductDTO})
    @ApiBearerAuth()
    @Post('create-product')
    createProduct (@Body() dto: CreateProductDTO): Promise<CreateProductDTO> {
        return this.productService.createProduct(dto)
    }

    @ApiTags("Product")
    @ApiResponse({status: 204})
    @ApiBearerAuth()
    @Delete('delete-product')
    deleteProduct(@Body('id') id: number): Promise<boolean> {
        return this.productService.deleteProduct(id);
    }
}

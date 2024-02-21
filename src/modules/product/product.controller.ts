import { Controller, Body, Post, Patch, Req, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateProductDTO } from './dto';
import { UpdateProductDTO } from './dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @ApiTags("Product")
    @ApiResponse({status: 201, type: CreateProductDTO})
    @Post('create-product')
    createProduct (@Body() dto: CreateProductDTO): Promise<CreateProductDTO> {
        return this.productService.createProduct(dto)
    }

    @ApiTags("Product")
    @ApiResponse({status: 200, type: UpdateProductDTO})
    @Patch('update-product')
    updateProduct (@Body() updateDto: UpdateProductDTO, @Req() request): Promise<UpdateProductDTO> {
        const product = request.product
        return this.productService.updateProduct(product.productName, updateDto)
    }

    @ApiTags("Product")
    @Delete('delete-product')
    deleteProduct (@Req() request): Promise<boolean> {
        const product = request.product
        return this.productService.deleteProduct(product.productName)
    }
}

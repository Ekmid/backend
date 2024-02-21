import { IsString, IsNumber } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CategoriesDTO {
    @ApiProperty()
    @IsString()
    categoryName: string;
}

export class CreateProductDTO {
    @ApiProperty()
    @IsString()
    productName: string;

    @ApiProperty()
    @IsString()
    productPhoto: string;

    @ApiProperty()
    @IsNumber()
    loadCapacity: number;

    @ApiProperty()
    @IsNumber()
    liftingHeight: number;

    @ApiProperty()
    @IsNumber()
    arrowLength: number;
}

export class UpdateProductDTO {
    @ApiProperty()
    @IsString()
    productName: string;

    @ApiProperty()
    @IsString()
    productPhoto: string;

    @ApiProperty()
    @IsNumber()
    loadCapacity: number;

    @ApiProperty()
    @IsNumber()
    liftingHeight: number;

    @ApiProperty()
    @IsNumber()
    arrowLength: number;
}
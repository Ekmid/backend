import { IsString, IsNumber } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

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

    @ApiProperty()
    @IsNumber()
    categoryId: number;
}
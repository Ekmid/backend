import { IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateCategoryDTO {
    @ApiProperty()
    @IsString()
    categoryName: string;
}
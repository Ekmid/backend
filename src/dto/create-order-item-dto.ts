import { IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDTO {

    @ApiProperty()
    @IsString()
    orderNumber: string;

    @ApiProperty()
    @IsNumber()
    totalPrice: number;

    @ApiProperty()
    @IsNumber()
    userId: number;

    
}
import { IsString } from "class-validator"

export class CartDTO {
    @IsString()
    name: string

    @IsString()
    assetId: string
}
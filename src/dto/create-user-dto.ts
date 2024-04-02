import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsArray } from "class-validator";

export class CreateUserDTO {
    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsString({ each: true })
    @IsArray()
    roles: string[];
}

export class UpdateUserDTO {
    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    email: string;
}
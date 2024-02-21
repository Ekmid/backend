import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/dto';
import { UserLoginDTO } from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthUserResponse } from './response';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiTags('Auth')
    @ApiResponse({status: 201, type: CreateUserDTO})
    @Post('register')
    register (@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.registerUsers(dto)
    } 

    @ApiTags('Auth')
    @ApiResponse({status: 200, type: AuthUserResponse})
    @Post('login')
    login (@Body() dto: UserLoginDTO) {
        return this.authService.loginUser(dto)
    }

}

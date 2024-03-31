import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { UserLoginDTO } from '../../dto/user-login-dto';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthUserResponse } from './response';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { UsersService } from '../users/users.service';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService,
    ) { }

    @ApiTags('Auth')
    @ApiResponse({ status: 201, type: CreateUserDTO })
    @Post('register')
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.registerUsers(dto)
    }

    @ApiTags('Auth')
    @ApiResponse({ status: 200, type: AuthUserResponse })
    @Post('login')
    login(@Body() dto: UserLoginDTO) {
        return this.authService.loginUser(dto)
    }
}
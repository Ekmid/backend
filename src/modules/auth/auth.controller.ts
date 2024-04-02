import { Body, Controller, Post, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { UserLoginDTO } from '../../dto/user-login-dto';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthUserResponse } from './response';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from 'src/guards/local-guard';
import { Role } from './enum/role.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles-guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService,
    ) { }

    @ApiTags('Auth')
    @ApiResponse({ status: 201, type: CreateUserDTO })
    @Post('/register')
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.registerUsers(dto)
    }

    @ApiTags('Auth')
    @ApiResponse({ status: 200, type: AuthUserResponse })
    // @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Body() dto: UserLoginDTO): Promise<any> {
        return this.authService.login(dto);
    }
}
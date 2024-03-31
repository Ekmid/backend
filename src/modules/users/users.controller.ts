import { Body, Controller, Delete, Patch, Req, UseGuards, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDTO } from '../../dto/create-user-dto';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { User } from '../../models/user.model';
import { RolesService } from '../roles/roles.service';
// import { AssignRoleDTO } from 'src/dto/assign-role-dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
        private readonly rolesService: RolesService
        ) { }

    @ApiTags("Profile")
    @ApiResponse({ status: 200, type: UpdateUserDTO })
    @ApiBearerAuth('JWT-auth')
    @Patch('update-user')
    @UseGuards(JwtAuthGuard)
    updateUser(@Body() updateDto: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
        const user = request.user; // Получаем данные пользователя из объекта запроса
        return this.userService.updateUser(user.email, updateDto);
    }

    @ApiTags("Profile")
    @Delete('delete-user')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    deleteUser(@Req() request): Promise<boolean> {
        const user = request.user; // Получаем данные пользователя из объекта запроса
        return this.userService.deleteUser(user.email);
    }

    @ApiTags("Profile")
    @ApiResponse({ status: 200, type: User })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get('info')
    getProfile(@Req() request): Promise<User> {
        const user = request.user; // Получаем данные пользователя из объекта запроса
        return this.userService.publicUser(user.email);
    }

    // @ApiTags("Roles")
    // @Post('assign-role')
    // assignRole(@Body() assignRoleDto: AssignRoleDTO): Promise<void> {
    //     const { email, roleName } = assignRoleDto;
    //     return this.userService.assignRoleToUser(email, roleName);
    // }

}

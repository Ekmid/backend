import { Body, Controller, Delete, Patch, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @ApiTags("Update/delete user")
    @ApiResponse({ status: 200, type: UpdateUserDTO })
    @Patch('update-user')
    updateUser(@Body() updateDto: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
        const user = request.user
        return this.userService.updateUser(user.email, updateDto)
    }

    @ApiTags("Update/delete user")
    @Delete('delete-user')
    deleteUser(@Req() request): Promise<boolean> {
        const user = request.user
        return this.userService.deleteUser(user.email)
    }
}

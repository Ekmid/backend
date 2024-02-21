import { Body, Controller, Delete, Patch, Req, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { request } from 'http';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @ApiTags("API")
    @ApiResponse({status: 200, type: UpdateUserDTO})
    @UseGuards(JwtAuthGuard)
    @Patch('update-user')
    updateUser(@Body() updateDto: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
        const user = request.user
        return this.userService.updateUser(user.email, updateDto)
    }

    @ApiTags("API")
    @UseGuards(JwtAuthGuard)
    @Delete('delete-user')
    deleteUser (@Req() request) {
        const user = request.user
        return this.userService.deleteUser(user.email)
    }
}

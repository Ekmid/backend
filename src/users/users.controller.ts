import { Body, Controller, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('create-user')
    createUsers (@Body() dto: CreateUserDTO) {
        console.log(dto);
        return this.userService.createUser(dto)
    }
}

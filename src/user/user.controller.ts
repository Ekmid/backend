import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get('get-all-users')
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('get-names')
    getNames() {
        return this.userService.getNames();
    }
}

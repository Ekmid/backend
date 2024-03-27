import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AppErrors } from 'src/common/constants/errors';
import { CreateUserDTO } from '../users/dto';
import { UserLoginDTO } from './dto';
import * as bcrypt from 'bcrypt';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly tokenService: TokenService
    ) {}

    async registerUsers(dto: CreateUserDTO): Promise<CreateUserDTO> {
        const existUser = await this.userService.findUserByEmail(dto.email)
        if (existUser) throw new BadRequestException(AppErrors.USER_EXIST)
        return this.userService.createUser(dto)
    }

<<<<<<< HEAD
    async loginUser(dto: UserLoginDTO): Promise<string> {
=======
    async loginUser(dto: UserLoginDTO): Promise<{token: string}> {
>>>>>>> 015f5955ef17a71ebc0cd7fa54f1691ef7383458
        const existUser = await this.userService.findUserByEmail(dto.email)
        if (!existUser) throw new BadRequestException(AppErrors.USER_NOT_EXIST)
        const validatePassword = await bcrypt.compare(dto.password, existUser.password)
        if (!validatePassword) throw new BadRequestException(AppErrors.WRONG_DATA)
        const userData = {
            name: existUser.firstName,
            email: existUser.email
<<<<<<< HEAD
        };
        const token = await this.tokenService.generateJwtToken(userData);
        return token
=======
        }
        const token = await this.tokenService.generateJwtToken(userData)
        return {token} 
>>>>>>> 015f5955ef17a71ebc0cd7fa54f1691ef7383458
        // existUser to show hashed pass
    }
}

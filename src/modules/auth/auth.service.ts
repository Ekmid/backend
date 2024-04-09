import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AppErrors } from 'src/common/constants/errors';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { UserLoginDTO } from '../../dto/user-login-dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async registerUsers(dto: CreateUserDTO): Promise<CreateUserDTO> {
        const existUser = await this.userService.findUserByEmail(dto.email);
        if (!existUser) {
            return this.userService.createUser(dto);
        }
        throw new BadRequestException('User with this email already exists');
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findUserByEmail(email);
        // console.log(user);
        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (isPasswordMatch) {
                return user; // Возвращаем пользователя при успешной аутентификации
            }
        }
        throw new UnauthorizedException('Invalid credentials'); // Бросаем исключение в случае неудачной аутентификации
    }

    async login(user: any) {
        const userNew = await this.validateUser(user.email, user.password);
        console.log(userNew);
        const payload = { email: userNew.email, id: userNew.id, role: userNew.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
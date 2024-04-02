import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO, UpdateUserDTO } from '../../dto/create-user-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private readonly userRepository: typeof User,
        ) {}

    async hashPassword(password) {
        return bcrypt.hash(password, 10)
    }

    async findUserByEmail(email: string): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: { email } });
        return user || null; // Если пользователя не найдено, вернуть null
    }

    async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
        dto.password = await this.hashPassword(dto.password)
        await this.userRepository.create({
            firstName: dto.firstName,
            username: dto.username,
            email: dto.email,
            password: dto.password,
            roles: dto.roles
        })
        return dto
    }

    async publicUser(email: string) {
        return this.userRepository.findOne({
            where: { email: email },
            attributes: { exclude: ['password'] }
        })
    }

    async updateUser(email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO> {
        await this.userRepository.update(dto, { where: { email: email } })
        return dto
    }

    async deleteUser(email: string): Promise<boolean> {
        await this.userRepository.destroy({ where: { email: email } })
        return true
    }

    async findByUsername(username: string) {
        return this.userRepository.findOne({ where: { username } });
    }

    async findById(id: number) {
        return this.userRepository.findOne({ where: { id } });
    }
}
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../models/user.model';
import { RolesModule } from '../roles/roles.module';
import { Role } from 'src/models/role.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role]),
    RolesModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }

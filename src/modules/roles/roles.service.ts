// role.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../../models/role.model';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private readonly rolesRepository: typeof Role) { }

    async createRole(roleName: string): Promise<Role> {
        return this.rolesRepository.create({ roleName });
    }

    async findRoleByName(roleName: string): Promise<Role | null> {
        return this.rolesRepository.findOne({ where: { roleName } });
    }

    async deleteRole(roleId: number): Promise<void> {
        const role = await this.rolesRepository.findOne({ where: { id: roleId } });
        if (!role) {
            throw new NotFoundException('Role not found');
        }
        await role.destroy();
    }
}

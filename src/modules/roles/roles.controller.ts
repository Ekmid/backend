// roles.controller.ts
import { Controller, Post, Body, Delete, Param, UseGuards, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from '../../models/role.model';
import { RolesGuard } from 'src/guards/roles-guard';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { UserRole } from 'src/guards/user-role';
import { Roles } from '../../decorators/roles.decorator';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @ApiTags("Roles")
    @ApiResponse({ status: 201 })
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create-role')
    createRole(@Body() body: { roleName: string }): Promise<Role> {
        const { roleName } = body;
        return this.rolesService.createRole(roleName);
    }

    @ApiTags("Roles")
    @ApiResponse({ status: 204 })
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete(':id')
    deleteRole(@Param('id') id: number): Promise<void> {
        return this.rolesService.deleteRole(id);
    }

    @ApiTags("Roles")
    @ApiResponse({ status: 204 })
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    @Get('get-role')
    findRoleByName(@Param('roleName') roleName: string): Promise<Role | null> {
        return this.rolesService.findRoleByName(roleName);
    }
}
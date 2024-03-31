// RolesGuard
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from './user-role';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>('roles', [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        
        const { user } = context.switchToHttp().getRequest();
        console.log('User in RolesGuard:', user);
        
        if (!user || !user.roles) {
            console.log('User or user roles undefined.');
            return false;
        }

        return requiredRoles.some(role => user.roles.includes(role));
    }
}

import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/guards/user-role';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const Roles = (role: string) => SetMetadata('role', role);

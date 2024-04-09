import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private configService: ConfigService
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.get<string>('role', context.getHandler());
    if (!requiredRole) {
      return true; // Если роль не указана, разрешаем доступ
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      return false; // Если токен отсутствует, отклоняем запрос
    }

    try {
      const secretKey = this.configService.get('SECRET')
      const user = this.jwtService.verify(token, {secret: secretKey})

      request.user = user;
      
      if (user.role) {
        return user.role == requiredRole
      } else return false

    } catch (error) {
      return false; // Если токен недействителен, отклоняем запрос
    }
  }
}
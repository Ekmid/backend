// JwtAuthGuard
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, context) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    console.log('User extracted from JWT token:', user);
    
    // Добавляем объект пользователя в объект запроса
    context.switchToHttp().getRequest().user = user;
    console.log('User added to request object:', user);
    
    return user;
  }
}

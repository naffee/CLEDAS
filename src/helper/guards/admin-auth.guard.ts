import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  
  @Injectable()
  export class AdminAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
  
    canActivate(context: ExecutionContext): boolean {
      const request = context.switchToHttp().getRequest<Request>();
      const authHeader = request.headers['authorization'];
  
      if (!authHeader) {
        throw new UnauthorizedException('No authorization token found');
      }
  
      const token = authHeader.split(' ')[1];
      try {
        const payload = this.jwtService.verify(token);
        //   console.log('payload', payload);
        if (payload.isAdmin) {
          request.user = payload;
          return true;
        } else {
          throw new UnauthorizedException('User is not an admin');
        }
      } catch (error) {
        throw new UnauthorizedException('Invalid or expired token');
      }
    }
  }
  
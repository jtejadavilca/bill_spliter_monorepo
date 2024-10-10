import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { META_ROLES } from '../../decorators/role-protected.decorator';

@Injectable()
export class UseRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get<string[]>(
      META_ROLES,
      context.getHandler(),
    );
    if (!validRoles || validRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request;

    if (!user) {
      throw new BadRequestException('User not found');
    }

    //const { roles } = user;
    const { role } = user;

    //if (!roles.some((role: string) => validRoles.includes(role))) {
    if (!validRoles.includes(role)) {
      throw new ForbiddenException(
        `User ${user.email} need a valid role: [${validRoles}]`,
      );
    }

    return true;
  }
}

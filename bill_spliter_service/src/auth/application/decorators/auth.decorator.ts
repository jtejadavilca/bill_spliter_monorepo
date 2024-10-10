import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ValidRoles } from 'src/auth/core/domain/models/enum/valid_roles.enum';
import { RoleProtected } from './role-protected.decorator';
import { UseRoleGuard } from '../guards/use-role/use-role.guard';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UseRoleGuard),
  );
}

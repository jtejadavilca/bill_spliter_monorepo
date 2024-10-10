import { UserModel } from 'src/auth/core/domain/models/user.model';
import { UserDocument } from '../database/schema/user.schema';
import { ValidRoles } from 'src/auth/core/domain/models/enum/valid_roles.enum';

export class UserDbMapper {
  public static toDomain(user: UserDocument): UserModel {
    return new UserModel(
      user._id,
      user.name,
      user.lastName,
      user.email,
      user.password,
      user.role.toString() as ValidRoles,
      user.enabled,
      user.createdAt,
    );
  }
}

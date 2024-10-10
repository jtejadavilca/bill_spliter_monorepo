import { UserModel } from 'src/auth/core/domain/models/user.model';
import { UserDocument } from '../database/schema/user.schema';

export class UserDbMapper {
  public static toDomain(user: UserDocument): UserModel {
    return new UserModel(
      user._id,
      user.name,
      user.lastName,
      user.email,
      user.password,
      user.role.toString() as 'ADMIN' | 'USER',
      user.enabled,
      user.createdAt,
    );
  }
}

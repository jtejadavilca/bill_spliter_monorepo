import { UserModel } from 'src/auth/core/domain/models/user.model';
import { RegisterDto } from '../controller/dto/register.dto';
import { ValidRoles } from 'src/auth/core/domain/models/enum/valid_roles.enum';

export class UserInputMapper {
  static mapToUserModel(
    registerDto: RegisterDto,
    encryptedPassword: string,
  ): UserModel {
    return new UserModel(
      null,
      registerDto.name,
      registerDto.lastName,
      registerDto.email,
      encryptedPassword,
      ValidRoles.USER,
      true,
      null,
    );
  }
}

import { UserModel } from 'src/auth/core/domain/models/user.model';
import { TokenPayloadDto } from '../controller/dto/token.payload.dto';

export class UserOutputMapper {
  static toTokenPayloadDto(userModel: UserModel): TokenPayloadDto {
    return new TokenPayloadDto(
      userModel.id,
      userModel.email,
      userModel.role,
      userModel.name,
      userModel.lastName,
    );
  }

  static toAuthDataDto(userModel: UserModel) {
    return {
      id: userModel.id,
      email: userModel.email,
      name: userModel.name,
      lastName: userModel.lastName,
      role: userModel.role,
    };
  }
}

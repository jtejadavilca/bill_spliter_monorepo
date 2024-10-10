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
}

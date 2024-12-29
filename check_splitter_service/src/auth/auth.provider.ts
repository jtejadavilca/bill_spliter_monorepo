import { Provider } from '@nestjs/common';
import { UserMongoRepository } from './infrastructure/out/adapter/user.mongo.repository';

export const AuthProvider: Provider = {
  provide: 'UserRepository',
  useClass: UserMongoRepository,
};

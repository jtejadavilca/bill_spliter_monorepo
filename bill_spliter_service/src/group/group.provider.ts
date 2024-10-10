import { Provider } from '@nestjs/common';
import { GroupMongoRepository } from './infrastructure/out/adapter/group.mongo.repository';

export const GroupProvider: Provider = {
  provide: 'GroupRepository',
  useClass: GroupMongoRepository,
};

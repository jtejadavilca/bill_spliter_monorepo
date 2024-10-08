import { Provider } from '@nestjs/common';
import { GroupService } from './application/service/group.service';
import { GroupMongoRepository } from './infrastructure/out/adapter/group.mongo.repository';

export const GroupProvider: Provider = {
  provide: 'GroupRepository', //groupServiceSymbol,
  useClass: GroupMongoRepository,
  //   useFactory: () => {
  //     return new GroupMongoRepository();
  //   },
};

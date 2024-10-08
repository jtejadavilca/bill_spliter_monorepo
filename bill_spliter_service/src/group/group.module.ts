import { Module } from '@nestjs/common';
import { GroupController } from './infrastructure/in/controller/group.controller';
import { GroupService } from './application/service/group.service';
import { GroupMongoRepository } from './infrastructure/out/adapter/group.mongo.repository';
import { GroupSchema } from './infrastructure/out/database/schema/group.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupRepository } from './core/domain/repositories/group.repository';
import { GroupProvider } from './group.provider';

@Module({
  controllers: [GroupController],
  imports: [
    MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
  ],
  providers: [
    GroupService,
    GroupProvider,
    // { provide: 'GroupRepository', useClass: GroupMongoRepository },
    // { provide: 'GroupRepository', useValue: new GroupMongoRepository() },
    // { provide: 'GroupRepository', useFactory: () => new GroupMongoRepository() },
  ],
})
export class GroupModule {}

import { Module } from '@nestjs/common';
import { GroupController } from './infrastructure/in/controller/group.controller';
import { GroupService } from './application/service/group.service';
import { GroupSchema } from './infrastructure/out/database/schema/group.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupProvider } from './group.provider';

@Module({
  controllers: [GroupController],
  imports: [
    MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
  ],
  providers: [GroupService, GroupProvider],
})
export class GroupModule {}

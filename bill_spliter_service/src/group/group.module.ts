import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GroupProvider } from './group.provider';
import { GroupService } from './application/service/group.service';
import { GroupController } from './infrastructure/in/controller/group.controller';
import { GroupSchema } from './infrastructure/out/database/schema/group.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [GroupController],
  imports: [
    MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
    AuthModule,
  ],
  providers: [GroupService, GroupProvider],
})
export class GroupModule {}

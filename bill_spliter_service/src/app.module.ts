import { Module } from '@nestjs/common';
import { GroupModule } from './group/group.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bill_spliter'),
    GroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

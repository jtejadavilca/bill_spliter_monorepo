import { Module } from '@nestjs/common';
import { GroupModule } from './group/group.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:rootpassword@localhost:27017', {
      dbName: 'bill_splitter',
    }),
    GroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    const mongoose = require('mongoose');
    mongoose.set('debug', true);
  }
}

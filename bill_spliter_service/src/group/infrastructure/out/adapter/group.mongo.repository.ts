import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupModel } from 'src/group/core/domain/models/group.model';
import { GroupRepository } from 'src/group/core/domain/repositories/group.repository';
import { GroupDocument } from '../database/schema/group.schema';
import { GroupDbMapper } from '../mapper/group.db.mapper';

@Injectable()
export class GroupMongoRepository implements GroupRepository {
  constructor(/*@InjectModel('Group') private groupModel: Model<GroupDocument>*/) {}

  async create(group: GroupModel): Promise<GroupModel> {
    /*const createdGroup = new this.groupModel(group);
    return GroupDbMapper.toDomain(await createdGroup.save());*/
    return new GroupModel('1222', '1', 'name', 1, 'groupType', 1);
  }

  async find(): Promise<GroupModel> {
    return new GroupModel('1222', '1', 'name', 1, 'groupType', 1);
  }

  // Otros métodos de acceso a datos
}

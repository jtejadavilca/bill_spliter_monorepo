import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupModel } from 'src/group/core/domain/models/group.model';
import { GroupRepository } from 'src/group/core/domain/repositories/group.repository';
import { GroupDocument } from '../database/schema/group.schema';
import { GroupDbMapper } from '../mapper/group.db.mapper';
import { Types } from 'mongoose';

@Injectable()
export class GroupMongoRepository implements GroupRepository {
  constructor(@InjectModel('Group') private groupModel: Model<GroupDocument>) {}

  async create(createGroup: GroupModel): Promise<GroupModel> {
    const createdGroup = new this.groupModel({ ...createGroup });
    return GroupDbMapper.toDomain(await createdGroup.save());
  }

  async update(id: string, group: GroupModel): Promise<GroupModel> {
    const fieldsToUpdate = Object.keys(group).reduce((acc, key) => {
      if (group[key] !== undefined && group[key] !== null) {
        acc[key] = group[key];
      }
      return acc;
    }, {});

    const updatedGroup = await this.groupModel.findByIdAndUpdate(
      id,
      fieldsToUpdate,
      {
        new: true,
      },
    );

    return updatedGroup ? GroupDbMapper.toDomain(updatedGroup) : null;
  }

  async findAll(): Promise<GroupModel[]> {
    return (await this.groupModel.find({ enabled: true })).map(
      GroupDbMapper.toDomain,
    );
  }

  async findById(id: string): Promise<GroupModel> {
    const objectId = new Types.ObjectId(id);

    const groupDocument = await this.groupModel.findOne({
      _id: objectId,
      enabled: 'true',
    });

    return groupDocument ? GroupDbMapper.toDomain(groupDocument) : null;
  }

  async physicalDelete(id: string): Promise<GroupModel> {
    const groupDocument = await this.groupModel.findByIdAndDelete(id);
    return groupDocument ? GroupDbMapper.toDomain(groupDocument) : null;
  }

  async delete(id: string): Promise<GroupModel> {
    const deletedGroup = await this.groupModel.findByIdAndUpdate(
      id,
      { enabled: false },
      { new: true },
    );

    return deletedGroup ? GroupDbMapper.toDomain(deletedGroup) : null;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupModel } from 'src/group/core/domain/models/group.model';
import { GroupRepository } from 'src/group/core/domain/repositories/group.repository';
import { GroupDocument } from '../database/schema/group.schema';
import { GroupDbMapper } from '../mapper/group.db.mapper';
import { Types } from 'mongoose';
import { Utils } from 'src/utils/utils';

@Injectable()
export class GroupMongoRepository implements GroupRepository {
  constructor(
    @InjectModel('Group') private groupDbModel: Model<GroupDocument>,
  ) {}

  async create(createGroup: GroupModel): Promise<GroupModel> {
    const createdGroup = new this.groupDbModel({ ...createGroup });
    return GroupDbMapper.toDomain(await createdGroup.save());
  }

  async update(id: string, updateGroupModel: GroupModel): Promise<GroupModel> {
    const fieldsToUpdate = Utils.getFieldsToUpdate(updateGroupModel);

    const updatedGroup = await this.groupDbModel.findByIdAndUpdate(
      id,
      fieldsToUpdate,
      {
        new: true,
      },
    );

    return updatedGroup ? GroupDbMapper.toDomain(updatedGroup) : null;
  }

  async findAll(): Promise<GroupModel[]> {
    return (await this.groupDbModel.find({ enabled: true })).map(
      GroupDbMapper.toDomain,
    );
  }

  async findById(id: string): Promise<GroupModel> {
    const objectId = new Types.ObjectId(id);

    const groupDocument = await this.groupDbModel.findOne({
      _id: objectId,
      enabled: 'true',
    });

    return groupDocument ? GroupDbMapper.toDomain(groupDocument) : null;
  }

  async findByCode(code: string): Promise<GroupModel> {
    const groupDocument = await this.groupDbModel.findOne({
      code,
      enabled: 'true',
    });

    return groupDocument ? GroupDbMapper.toDomain(groupDocument) : null;
  }

  async physicalDelete(id: string): Promise<GroupModel> {
    const groupDocument = await this.groupDbModel.findByIdAndDelete(id);
    return groupDocument ? GroupDbMapper.toDomain(groupDocument) : null;
  }

  async physicalDeleteAll(): Promise<number> {
    try {
      const groupDocument = await this.groupDbModel.deleteMany({});
      return groupDocument.deletedCount;
    } catch (e) {
      return 0;
    }
  }

  async delete(id: string): Promise<GroupModel> {
    const deletedGroup = await this.groupDbModel.findByIdAndUpdate(
      id,
      { enabled: false },
      { new: true },
    );

    return deletedGroup ? GroupDbMapper.toDomain(deletedGroup) : null;
  }
}

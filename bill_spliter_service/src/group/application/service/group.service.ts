import { Inject, Injectable } from '@nestjs/common';
import { GroupModel } from 'src/group/core/domain/models/group.model';
// import { CreateGroupDto } from './dto/create-group.dto';
// import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupRepository } from 'src/group/core/domain/repositories/group.repository';

@Injectable()
export class GroupService {
  constructor(
    @Inject('GroupRepository')
    private readonly groupRepository: GroupRepository,
  ) {}

  create(groupModel: GroupModel): Promise<GroupModel> {
    return this.groupRepository.create(groupModel);
  }

  findAll(): Promise<GroupModel[]> {
    return this.groupRepository.findAll();
  }

  findOne(id: string): Promise<GroupModel> {
    return this.groupRepository.findById(id);
  }

  // update(id: string, updateGroupDto: UpdateGroupDto): Promise<GroupModel> {
  //   return `This action updates a #${id} group`;
  // }

  // remove(id: string): Promise<GroupModel> {
  //   return `This action removes a #${id} group`;
  // }
}

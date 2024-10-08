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

  find(): Promise<GroupModel> {
    return this.groupRepository.find();
  }

  // findAll() {
  //   return `This action returns all group`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} group`;
  // }

  // update(id: number, updateGroupDto: UpdateGroupDto) {
  //   return `This action updates a #${id} group`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} group`;
  // }
}

import { GroupModel } from 'src/group/core/domain/models/group.model';
import { CreateGroupDto } from '../controller/dto/create-group.dto';
import { UpdateGroupDto } from '../controller/dto/update-group.dto';

export class GroupInputMapper {
  static mapToCreateGroupModel(createGroupDto: CreateGroupDto): GroupModel {
    return new GroupModel(
      null,
      createGroupDto.userId,
      createGroupDto.name,
      createGroupDto.numMembers,
      createGroupDto.groupType,
      createGroupDto.totalAmount,
      true,
      null,
    );
  }

  static mapToUpdateGroupModel(updateGroupDto: UpdateGroupDto): GroupModel {
    return new GroupModel(
      null,
      null,
      updateGroupDto.name,
      updateGroupDto.numMembers,
      updateGroupDto.groupType,
      updateGroupDto.totalAmount,
      true,
      null,
    );
  }
}

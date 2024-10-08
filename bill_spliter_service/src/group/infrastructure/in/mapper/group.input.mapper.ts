import { GroupModel } from 'src/group/core/domain/models/group.model';
import { CreateGroupDto } from '../controller/dto/create-group.dto';

export class GroupInputMapper {
  static mapToCreateGroupModel(createGroupDto: CreateGroupDto) {
    return new GroupModel(
      null,
      createGroupDto.userId,
      createGroupDto.name,
      createGroupDto.numMembers,
      createGroupDto.groupType,
      createGroupDto.totalAmount,
    );
  }
}

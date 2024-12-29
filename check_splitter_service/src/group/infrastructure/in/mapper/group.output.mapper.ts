import { GroupModel } from 'src/group/core/domain/models/group.model';
import { GetGroupDto } from '../controller/dto/get-group.dto';

export class GroupOutputMapper {
  public static mapToGroupDto(group: GroupModel): GetGroupDto {
    if (!group) {
      return null;
    }
    return {
      id: group.id,
      userId: group.userId,
      code: group.code,
      name: group.name,
      numMembers: group.numMembers,
      groupType: group.groupType,
      totalAmount: group.totalAmount,
      enabled: group.enabled,
      createdAt: group.createdAt,
    };
  }
}

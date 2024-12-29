import { GroupModel } from 'src/group/core/domain/models/group.model';
import { GroupDocument } from '../database/schema/group.schema';

export class GroupDbMapper {
  static toDomain(groupDocument: GroupDocument): GroupModel {
    return new GroupModel(
      groupDocument._id,
      groupDocument.userId,
      groupDocument.code,
      groupDocument.name,
      groupDocument.numMembers,
      groupDocument.groupType,
      groupDocument.totalAmount,
      groupDocument.enabled,
      groupDocument.createdAt,
    );
  }
}

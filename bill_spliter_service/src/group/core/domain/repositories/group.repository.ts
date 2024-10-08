import { GroupModel } from '../models/group.model';

export interface GroupRepository {
  create(groupModel: GroupModel): Promise<GroupModel>;
  find(): Promise<GroupModel>;
  // update(group: Group): Promise<Group>;
  // delete(id: string): Promise<void>;
  // findById(id: string): Promise<Group>;
  // findAll(): Promise<Group[]>;
}

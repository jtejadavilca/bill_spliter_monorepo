import { GroupModel } from '../models/group.model';

export interface GroupRepository {
  create(groupModel: GroupModel): Promise<GroupModel>;
  findAll(): Promise<GroupModel[]>;
  findById(id: string): Promise<GroupModel>;
  // update(group: Group): Promise<Group>;
  // delete(id: string): Promise<void>;
  // findAll(): Promise<Group[]>;
}

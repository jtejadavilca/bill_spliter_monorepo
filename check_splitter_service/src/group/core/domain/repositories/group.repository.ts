import { GroupModel } from '../models/group.model';

export interface GroupRepository {
  create(createGroupModel: GroupModel): Promise<GroupModel>;
  update(id: string, updateGroupModel: GroupModel): Promise<GroupModel>;
  findAll(): Promise<GroupModel[]>;
  findById(id: string): Promise<GroupModel>;
  findByCode(code: string): Promise<GroupModel>;
  physicalDelete(id: string): Promise<GroupModel>;
  physicalDeleteAll(): Promise<number>;
  delete(id: string): Promise<GroupModel>;
}

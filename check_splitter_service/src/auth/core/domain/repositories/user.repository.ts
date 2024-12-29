import { UserModel } from '../models/user.model';

export interface UserRepository {
  create(createUserModel: UserModel): Promise<UserModel>;
  update(id: string, updateUserModel: UserModel): Promise<UserModel>;
  findAll(): Promise<UserModel[]>;
  findById(id: string): Promise<UserModel>;
  findByEmail(email: string): Promise<UserModel>;
  delete(id: string): Promise<UserModel>;
  physicalDeleteAll(): Promise<number>;
}

import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserModel } from 'src/auth/core/domain/models/user.model';
import { UserRepository } from 'src/auth/core/domain/repositories/user.repository';
import { UserDbMapper } from '../mapper/user.db.mapper';
import { UserDocument } from '../database/schema/user.schema';
import { Utils } from '../../../../utils/utils';
import { UserAlreadyExistsException } from 'src/auth/core/exceptions/user/user_already_exists.exception';

export class UserMongoRepository implements UserRepository {
  constructor(
    @InjectModel('User') private readonly userDbModel: Model<UserDocument>,
  ) {}

  async create(createUserModel: UserModel): Promise<UserModel> {
    try {
      const createUser = new this.userDbModel({ ...createUserModel });
      return UserDbMapper.toDomain(await createUser.save());
    } catch (error) {
      if (error.code === 11000) {
        throw new UserAlreadyExistsException();
      }
    }
  }

  async update(id: string, updateUserModel: UserModel): Promise<UserModel> {
    const fieldsToUpdate = Utils.getFieldsToUpdate(updateUserModel);

    const updatedUser = await this.userDbModel.findByIdAndUpdate(
      id,
      fieldsToUpdate,
      {
        new: true,
      },
    );

    return updatedUser ? UserDbMapper.toDomain(updatedUser) : null;
  }

  async findAll(): Promise<UserModel[]> {
    return (await this.userDbModel.find({ enabled: true })).map(
      UserDbMapper.toDomain,
    );
  }

  async findById(id: string): Promise<UserModel> {
    const objectId = new Types.ObjectId(id);

    const userDocument = await this.userDbModel.findOne({
      _id: objectId,
      enabled: 'true',
    });

    return userDocument ? UserDbMapper.toDomain(userDocument) : null;
  }

  async findByEmail(email: string): Promise<UserModel> {
    const userDocument = await this.userDbModel.findOne({
      email,
      enabled: 'true',
    });

    return userDocument ? UserDbMapper.toDomain(userDocument) : null;
  }

  async delete(id: string): Promise<UserModel> {
    const deletedUser = await this.userDbModel.findByIdAndUpdate(
      id,
      { enabled: false },
      {
        new: true,
      },
    );

    return deletedUser ? UserDbMapper.toDomain(deletedUser) : null;
  }
}

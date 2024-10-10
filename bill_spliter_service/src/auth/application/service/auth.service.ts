import * as bcrypt from 'bcrypt';
import { Inject } from '@nestjs/common';
import { UserModel } from 'src/auth/core/domain/models/user.model';
import { UserRepository } from 'src/auth/core/domain/repositories/user.repository';

export class AuthService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  create(createUserModel: UserModel): Promise<UserModel> {
    return this.userRepository.create(createUserModel);
  }

  update(id: string, updateUserModel: UserModel): Promise<UserModel> {
    return this.userRepository.update(id, updateUserModel);
  }

  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserModel> {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return null;
    }

    return user;
  }

  async getUserById(id: string): Promise<UserModel> {
    return this.userRepository.findById(id);
  }
}

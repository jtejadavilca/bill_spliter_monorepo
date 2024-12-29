import * as bcrypt from 'bcrypt';
import { Inject } from '@nestjs/common';
import { UserModel } from 'src/auth/core/domain/models/user.model';
import { UserRepository } from 'src/auth/core/domain/repositories/user.repository';
import { ConfigService } from '@nestjs/config';

export class AuthService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
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

  async physicalDeleteAll(): Promise<number> {
    const environment = this.configService.get('ENV');
    if (environment !== 'DEV') {
      throw new Error(
        `This process can only be executed in development environment, not in ${environment}`,
      );
    }
    return this.userRepository.physicalDeleteAll();
  }
}

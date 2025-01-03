import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GroupModel } from 'src/group/core/domain/models/group.model';
import { GroupRepository } from 'src/group/core/domain/repositories/group.repository';

@Injectable()
export class GroupService {
  constructor(
    @Inject('GroupRepository')
    private readonly groupRepository: GroupRepository,
    private readonly configService: ConfigService,
  ) {}

  create(createGroupModel: GroupModel): Promise<GroupModel> {
    return this.groupRepository.create(createGroupModel);
  }

  update(id: string, updateGroupModel: GroupModel): Promise<GroupModel> {
    console.log('updateGroupModel', updateGroupModel);
    return this.groupRepository.update(id, updateGroupModel);
  }

  findAll(): Promise<GroupModel[]> {
    return this.groupRepository.findAll();
  }

  async findById(id: string): Promise<GroupModel> {
    return await this.groupRepository.findById(id);
  }

  findByCode(code: string): Promise<GroupModel> {
    return this.groupRepository.findByCode(code);
  }

  physicalDelete(id: string): Promise<GroupModel> {
    return this.groupRepository.physicalDelete(id);
  }

  delete(id: string): Promise<GroupModel> {
    return this.groupRepository.delete(id);
  }

  physicalDeleteAll(): Promise<number> {
    const environment = this.configService.get('ENV');
    if (environment !== 'DEV') {
      throw new Error(
        `This process can only be executed in development environment, not in ${environment}`,
      );
    }
    return this.groupRepository.physicalDeleteAll();
  }
}

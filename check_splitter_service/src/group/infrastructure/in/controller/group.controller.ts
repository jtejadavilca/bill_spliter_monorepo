import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { GroupService } from 'src/group/application/service/group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupInputMapper } from '../mapper/group.input.mapper';
import { GroupOutputMapper } from '../mapper/group.output.mapper';
import { GetGroupDto } from './dto/get-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Auth, GetUser } from 'src/auth/application/decorators';
import { UserModel } from 'src/auth/core/domain/models/user.model';
import { ValidRoles } from 'src/auth/core/domain/models/enum/valid_roles.enum';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @Auth()
  async create(
    @Body() createGroupDto: CreateGroupDto,
    @GetUser() user: UserModel,
  ): Promise<GetGroupDto> {
    const createdGroup = await this.groupService.create(
      GroupInputMapper.mapToCreateGroupModel(createGroupDto),
    );
    return GroupOutputMapper.mapToGroupDto(createdGroup);
  }

  @Patch(':id')
  @Auth()
  async update(
    @Param('id') id: string,
    @Body() updateGroupDto: UpdateGroupDto,
    @GetUser() user: UserModel,
  ): Promise<GetGroupDto> {
    const updatedGroup = await this.groupService.update(
      id,
      GroupInputMapper.mapToUpdateGroupModel(updateGroupDto),
    );

    if (!updatedGroup) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }

    return GroupOutputMapper.mapToGroupDto(updatedGroup);
  }

  @Get()
  @Auth()
  async findAll(): Promise<GetGroupDto[]> {
    const groupModels = await this.groupService.findAll();

    return groupModels.map(GroupOutputMapper.mapToGroupDto);
  }

  @Get(':id')
  @Auth()
  async findById(@Param('id') id: string): Promise<GetGroupDto> {
    const groupDto = GroupOutputMapper.mapToGroupDto(
      await this.groupService.findById(id),
    );

    if (!groupDto) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }

    return groupDto;
  }

  @Get(':code')
  @Auth()
  async findByCode(@Param('code') code: string): Promise<GetGroupDto> {
    const groupDto = GroupOutputMapper.mapToGroupDto(
      await this.groupService.findByCode(code),
    );

    if (!groupDto) {
      throw new NotFoundException(`Group with code ${code} not found`);
    }

    return groupDto;
  }

  @Delete('/physical/:id')
  @Auth(ValidRoles.ADMIN)
  async physicalDelete(@Param('id') id: string): Promise<GetGroupDto> {
    const deletedGroup = await this.groupService.physicalDelete(id);

    if (!deletedGroup) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }
    return deletedGroup;
  }

  @Delete(':id')
  @Auth(ValidRoles.ADMIN)
  async delete(@Param('id') id: string) {
    const deletedGroup = await this.groupService.delete(id);
    if (!deletedGroup) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }
    return deletedGroup;
  }
}

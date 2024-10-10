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

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto): Promise<GetGroupDto> {
    const createdGroup = await this.groupService.create(
      GroupInputMapper.mapToCreateGroupModel(createGroupDto),
    );
    return GroupOutputMapper.mapToGroupDto(createdGroup);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGroupDto: UpdateGroupDto,
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
  async findAll(): Promise<GetGroupDto[]> {
    const groupModels = await this.groupService.findAll();

    return groupModels.map(GroupOutputMapper.mapToGroupDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetGroupDto> {
    const groupDto = GroupOutputMapper.mapToGroupDto(
      await this.groupService.findById(id),
    );

    if (!groupDto) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }

    return groupDto;
  }

  @Delete('/physical/:id')
  async physicalDelete(@Param('id') id: string): Promise<GetGroupDto> {
    const deletedGroup = await this.groupService.physicalDelete(id);

    if (!deletedGroup) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }
    return deletedGroup;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedGroup = await this.groupService.delete(id);
    if (!deletedGroup) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }
    return deletedGroup;
  }
}

import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/application/service/auth.service';
import { GroupService } from 'src/group/application/service/group.service';
import { seedData } from './data/seed_data';
import { ValidRoles } from 'src/auth/core/domain/models/enum/valid_roles.enum';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SeedService {
  constructor(
    private readonly groupService: GroupService,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  async generateData(): Promise<string> {
    try {
      const environment = this.configService.get('ENV');
      if (environment !== 'DEV') {
        throw new Error(
          `This process can only be executed in development environment, not in ${environment}`,
        );
      }
      // removing data
      console.log('Removing groups...');
      await this.groupService.physicalDeleteAll();
      console.log('Removing groups done!');

      console.log('Removing users...');
      await this.authService.physicalDeleteAll();
      console.log('Removing users done!');

      const { users, groups } = seedData;

      // Inserting user data
      console.log('Inserting users...');
      const saveUsers = [];
      users.forEach(async (user) => {
        saveUsers.push(
          this.authService.create({
            ...user,
            password: bcrypt.hashSync(user.password, 10),
            id: null,
            role: ValidRoles.USER,
            enabled: true,
            createdAt: new Date(),
          }),
        );
      });
      const savedUsers = await Promise.all(saveUsers);
      console.log('Inserting users done!');

      // Inserting group data
      console.log('Inserting groups...');
      const firstUserId = savedUsers[0].id;
      const saveGroups = [];
      groups.forEach(async (group) => {
        saveGroups.push(
          this.groupService.create({
            ...group,
            id: null,
            userId: firstUserId,
            enabled: true,
            createdAt: new Date(),
          }),
        );
      });

      await Promise.all(saveGroups);
      console.log('Inserting groups done!');

      return 'Data created. Process Finished successfully!';
    } catch (error) {
      return `Error creating data: ${error}`;
    }
  }
}

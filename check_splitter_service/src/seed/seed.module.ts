import { Module } from '@nestjs/common';
import { SeedController } from './infrastructure/in/controller/seed.controller';
import { SeedService } from './application/service/seed.service';
import { AuthModule } from 'src/auth/auth.module';
import { GroupModule } from 'src/group/group.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [SeedController],
  imports: [ConfigModule, AuthModule, GroupModule],
  providers: [SeedService],
})
export class SeedModule {}

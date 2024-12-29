import { Controller, Get, Post } from '@nestjs/common';
import { SeedService } from 'src/seed/application/service/seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async create(): Promise<string> {
    return this.seedService.generateData();
  }
}

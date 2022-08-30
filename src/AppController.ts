import { Controller, Get } from '@nestjs/common';
import { AppService } from './AppService';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('/ping')
  async ping() {
    return this.service.ping();
  }
}

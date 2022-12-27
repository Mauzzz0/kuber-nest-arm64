import { Injectable } from '@nestjs/common';
import { GraylogService } from './graylog';

@Injectable()
export class AppService {
  constructor(private gl: GraylogService) {}

  async ping() {
    await this.gl.info('Просто сообщение');
    return 'Pong!';
  }
}

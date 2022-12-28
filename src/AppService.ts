import { Inject, Injectable } from '@nestjs/common';
import { GraylogService } from './graylog';
import { DataSource } from 'typeorm';
import { POSTGRES_BASE_TOKEN } from './db/postgres/typeorm/tokens';

@Injectable()
export class AppService {
  constructor(
    @Inject(POSTGRES_BASE_TOKEN) private pg: DataSource,
    private gl: GraylogService,
  ) {}

  async ping() {
    await this.gl.info('Просто сообщение');
    return 'Pong!';
  }

  async postgresVersion() {
    return await this.pg.query('select version()');
  }
}

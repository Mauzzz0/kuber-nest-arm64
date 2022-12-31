import { Inject, Injectable } from '@nestjs/common';
import { GraylogService } from './graylog';
import { DataSource } from 'typeorm';
import { POSTGRES_CONNECTION_TOKEN } from './db/postgres/typeorm/tokens';
import { ClickhouseService } from './db/clickhouse/ClickhouseService';

@Injectable()
export class AppService {
  constructor(
    @Inject(POSTGRES_CONNECTION_TOKEN) private pg: DataSource,
    private gl: GraylogService,

    private clickhouseService: ClickhouseService,
  ) {}

  async ping() {
    await this.gl.info('Просто сообщение');
    return 'Pong!';
  }

  async postgresVersion() {
    return await this.pg.query('select version()');
  }

  async clickhouseVersion() {
    return await this.clickhouseService.getVersion();
  }
}

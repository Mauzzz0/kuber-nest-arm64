import { Inject, Injectable } from '@nestjs/common';
import { GraylogService } from './graylog';
import { DataSource } from 'typeorm';
import { POSTGRES_CONNECTION_TOKEN } from './db/postgres/typeorm/tokens';
import { ClickhouseService } from './db/clickhouse/ClickhouseService';
import { SMS_GATEWAY_TOKEN } from './sms/token';
import { SmsBody, SmsProvider } from './sms/types';

@Injectable()
export class AppService {
  constructor(
    @Inject(POSTGRES_CONNECTION_TOKEN) private pg: DataSource,
    private gl: GraylogService,
    @Inject(SMS_GATEWAY_TOKEN) private sms: SmsProvider,

    private clickhouseService: ClickhouseService,
  ) {}

  async sendSms(dto: SmsBody) {
    this.sms.send_sms(dto, (data, raw, err, code) => {
      if (err) return { err };
    });

    return true;
  }

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

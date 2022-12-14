import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ClickhouseConnectionOptions } from '../db/clickhouse/types';
import { SmsConfigType } from '../sms/types';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  public postgresConfig(path: string) {
    return this.configService.get<PostgresConnectionOptions>(`db.pg.${path}`);
  }

  public clickhouseConfig(path: string) {
    return this.configService.get<ClickhouseConnectionOptions>(`db.ch.${path}`);
  }

  public smsConfig(path: string) {
    return this.configService.get<SmsConfigType>(`sms.${path}`);
  }
}

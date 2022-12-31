import { Injectable } from '@nestjs/common';
import { clickhouseServiceFactory } from './ClickhouseServiceClass';
import { CLICKHOUSE_CONNECTION_TOKEN } from './tokens';

@Injectable()
export class ClickhouseService extends clickhouseServiceFactory(
  CLICKHOUSE_CONNECTION_TOKEN,
) {
  public async getVersion() {
    return await this.query('select version()');
  }
}

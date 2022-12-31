import { postgresConnectionFactory } from './postgres/typeorm/provider';
import { Module } from '@nestjs/common';
import { ApiConfigModule } from '../config/ApiConfigModule';
import { POSTGRES_CONNECTION_TOKEN } from './postgres/typeorm/tokens';
import { clickhouseConnectionFactory } from './clickhouse/providers';
import { CLICKHOUSE_CONNECTION_TOKEN } from './clickhouse/tokens';
import { ClickhouseService } from './clickhouse/ClickhouseService';

const postgresBaseConnection = postgresConnectionFactory(
  'base',
  POSTGRES_CONNECTION_TOKEN,
);

const clickhouseBaseConnection = clickhouseConnectionFactory(
  'base',
  CLICKHOUSE_CONNECTION_TOKEN,
);

const providers = [
  postgresBaseConnection,
  clickhouseBaseConnection,
  ClickhouseService,
];

@Module({
  imports: [ApiConfigModule],
  providers: [...providers],
  exports: [...providers],
})
export class DbModule {}

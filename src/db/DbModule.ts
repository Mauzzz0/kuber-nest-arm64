import { postgresConnectionFactory } from './postgres/typeorm/provider';
import { Module } from '@nestjs/common';
import { ApiConfigModule } from '../config/ApiConfigModule';
import { POSTGRES_BASE_TOKEN } from './postgres/typeorm/tokens';

const postgresBaseConnection = postgresConnectionFactory(
  'base',
  POSTGRES_BASE_TOKEN,
);

const providers = [postgresBaseConnection];

@Module({
  imports: [ApiConfigModule],
  providers: [...providers],
  exports: [...providers],
})
export class DbModule {}

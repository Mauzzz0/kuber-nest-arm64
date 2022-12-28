import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envFile } from './common/envFile';
import dbConfig from './db';
import { ApiConfigService } from './ApiConfigService';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFile(),
      load: [dbConfig],
    }),
  ],
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class ApiConfigModule {}

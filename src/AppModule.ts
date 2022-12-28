import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraylogModule, GraylogService } from './graylog';
import { DbModule } from './db/DbModule';

@Module({
  imports: [
    DbModule,
    CacheModule.register({
      isGlobal: false,
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 3,
    }),
    GraylogModule.register({ servers: [{ host: '127.0.0.1', port: 12111 }] }),
  ],
  controllers: [AppController],
  exports: [GraylogService],
  providers: [
    AppService,
    GraylogService,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class AppModule {}

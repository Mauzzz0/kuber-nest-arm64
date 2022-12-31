import {
  CACHE_MANAGER,
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './AppService';
import { Cache } from 'cache-manager';
import { sleep } from './utils/sleep';

@Controller()
export class AppController {
  constructor(
    private readonly service: AppService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  @Get('/ping')
  async ping() {
    return this.service.ping();
  }

  @Get('/cache-manual')
  async cacheManual() {
    const key = 'key';
    const cachedData = await this.cacheService.get<string>(key);

    if (cachedData) {
      return cachedData;
    }

    await sleep(2);
    const result = this.service.ping();

    await this.cacheService.set(key, result, { ttl: 10 });

    return cachedData;
  }

  @CacheKey('custom-cache-key')
  @CacheTTL(10)
  @UseInterceptors(CacheInterceptor)
  @Get('/cache-interceptor')
  async cacheInterceptor() {
    await sleep(2);
    return this.service.ping();
  }

  @Get('/postgres-version')
  async postgresVersion() {
    return this.service.postgresVersion();
  }

  @Get('/clickhouse-version')
  async clickhousePostgres() {
    return this.service.clickhouseVersion();
  }
}

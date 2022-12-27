import { DynamicModule, Module, Provider } from '@nestjs/common';
import {
  GraylogModuleAsyncOptions,
  GraylogModuleOptions,
} from './types/GraylogModuleOptionts';
import { GRAYLOG_CONFIGURATION_TOKEN } from './constants';
import { GraylogService } from './GraylogService';

@Module({})
export class GraylogModule {
  public static register(config: GraylogModuleOptions): DynamicModule {
    return {
      module: GraylogModule,
      providers: [
        {
          provide: GRAYLOG_CONFIGURATION_TOKEN,
          useValue: config,
        },
        GraylogService,
      ],
      exports: [GRAYLOG_CONFIGURATION_TOKEN, GraylogService],
    };
  }

  public static async registerAsync(
    config: GraylogModuleAsyncOptions,
  ): Promise<DynamicModule> {
    return {
      module: GraylogModule,
      imports: config.imports || [],
      providers: [this.createAsyncProvider(config), GraylogService],
      exports: [GRAYLOG_CONFIGURATION_TOKEN, GraylogService],
    };
  }

  public static createAsyncProvider(
    options: GraylogModuleAsyncOptions,
  ): Provider {
    return {
      provide: GRAYLOG_CONFIGURATION_TOKEN,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };
  }
}

import graylog2 = require('graylog2');
import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { GRAYLOG_CONFIGURATION_TOKEN } from './constants';
import { GraylogModuleOptions } from './types/GraylogModuleOptionts';

@Injectable()
export class GraylogService implements OnApplicationShutdown {
  private readonly graylog: graylog2.graylog;

  constructor(
    @Inject(GRAYLOG_CONFIGURATION_TOKEN) private config: GraylogModuleOptions,
  ) {
    this.graylog = new graylog2.graylog(config);
  }

  private getGl(): graylog2.graylog {
    return this.graylog;
  }

  async error(message: string, additionals?: Record<string, any>) {
    await this.graylog.error(message, null, additionals);
  }

  async warning(message: string, additionals?: Record<string, any>) {
    await this.graylog.warning(message, null, additionals);
  }

  async info(message: string, additionals?: Record<string, any>) {
    await this.graylog.info(message, null, additionals);
  }

  async onApplicationShutdown() {
    await this.graylog.close();
  }
}

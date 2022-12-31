import { Provider } from '@nestjs/common';
import { ApiConfigService } from '../../config/ApiConfigService';
import { ClickHouse } from 'clickhouse';

export const clickhouseConnectionFactory = (
  path: string,
  token: string | symbol,
): Provider => ({
  provide: token,
  useFactory: (configService: ApiConfigService) => {
    const params = configService.clickhouseConfig(path);

    return new ClickHouse(params);
  },
  inject: [ApiConfigService],
});

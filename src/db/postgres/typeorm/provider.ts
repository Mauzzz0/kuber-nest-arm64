import { Provider } from '@nestjs/common';
import { ApiConfigService } from '../../../config/ApiConfigService';
import { DataSource } from 'typeorm';

export const postgresConnectionFactory = (
  path: string,
  token: string | symbol,
): Provider => ({
  provide: token,
  useFactory: async (configService: ApiConfigService) => {
    const config = configService.postgresConfig(path);

    if (!config) {
      throw new Error(`Не найдено конфига для '${path}' постгреса`);
    }

    const datasource = new DataSource(config);
    const connection = await datasource.initialize();

    return connection;
  },
  inject: [ApiConfigService],
});

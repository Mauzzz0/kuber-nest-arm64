import { registerAs } from '@nestjs/config';
import { pgConfig } from '../../db/postgres/typeorm/config';

export default registerAs('db', () => ({
  // Остальные строки добавлены для примера использования нескольких конфигов
  pg: {
    base: pgConfig(),
  },
  // mysql: {
  //   zabbix: zabbixConfig(),
  // },
  // clickhouse: {
  //   msk: mskClickhouseConfig(),
  //   fra: fraClickhouseConfig(),
  // },
}));

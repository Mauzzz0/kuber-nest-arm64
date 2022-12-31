import { registerAs } from '@nestjs/config';
import { pgConfig } from '../../db/postgres/typeorm/config';
import { clickhouseConfig } from '../../db/clickhouse/config';

export default registerAs('db', () => ({
  // Остальные строки добавлены для примера использования нескольких конфигов
  pg: {
    base: pgConfig(),
  },
  // mysql: {
  //   zabbix: zabbixConfig(),
  // },
  ch: {
    base: clickhouseConfig(),
    //   fra: fraClickhouseConfig(),
  },
}));

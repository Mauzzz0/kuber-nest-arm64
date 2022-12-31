import { ClickhouseConnectionOptions } from './types';

export const clickhouseConfig = (): ClickhouseConnectionOptions => ({
  client: 'clickhouse',
  url: process.env.CH_URL,
  port: Number(process.env.CH_PORT),
  database: process.env.CH_DATABASE,
  format: 'json',
  basicAuth: {
    username: process.env.CH_USER,
    password: process.env.CH_PASSWORD,
  },
});

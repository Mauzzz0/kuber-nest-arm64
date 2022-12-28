import * as process from 'process';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const entities = [];
export const pgConfig = (): PostgresConnectionOptions => ({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  type: 'postgres',
  synchronize: true,
  entities,
});

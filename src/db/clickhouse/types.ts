export interface ClickhouseConnectionOptions {
  client: 'clickhouse';
  url: string;
  port: number;
  format: string;
  basicAuth: {
    username: string;
    password: string;
  };
  database: string;
}

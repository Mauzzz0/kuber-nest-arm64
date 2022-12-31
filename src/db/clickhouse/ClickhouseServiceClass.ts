import { ClickHouse } from 'clickhouse';
import { Inject, Type } from '@nestjs/common';

export abstract class ClickhouseServiceClass {
  protected clickhouse: ClickHouse;

  public async query<T>(query: string): Promise<T> {
    const result = await this.clickhouse.query(query).toPromise();

    return result as T;
  }
}

export const clickhouseServiceFactory = (
  token: string | symbol,
): Type<ClickhouseServiceClass> => {
  class ServiceClass extends ClickhouseServiceClass {
    constructor(@Inject(token) public readonly inClickhouse: ClickHouse) {
      super();

      this.clickhouse = this.inClickhouse;
    }
  }

  return ServiceClass;
};

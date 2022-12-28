import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  public postgresConfig(path: string) {
    return this.configService.get<PostgresConnectionOptions>(`db.pg.${path}`);
  }
}

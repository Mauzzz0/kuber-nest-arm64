import { FactoryProvider, ModuleMetadata } from '@nestjs/common';

export type GraylogModuleOptions = {
  servers: { host: string; port: number }[];
  hostname?: string;
};

export type GraylogModuleAsyncOptions = {
  useFactory: (
    ...args: any[]
  ) => GraylogModuleOptions | Promise<GraylogModuleOptions>;
} & Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider, 'inject'>;

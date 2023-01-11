import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export type SmsConfigType = {
  login: string;
  password: string;
};

export type SmsProvider = {
  configure: (data: SmsConfigType) => void;
  send_sms: (
    data: SmsBody,
    cb: (data: any, raw: any, err: any, code: any) => void,
  ) => void;
};

export class SmsBody {
  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  phones: string[];

  @ApiProperty()
  @IsString()
  mes: string;
}

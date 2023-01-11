import { Module } from '@nestjs/common';
import { ApiConfigModule } from '../config/ApiConfigModule';
import { smsGatewayFactory } from './provider';
import { SMS_GATEWAY_TOKEN } from './token';

const smsGateway = smsGatewayFactory('base', SMS_GATEWAY_TOKEN);

const providers = [smsGateway];

@Module({
  imports: [ApiConfigModule],
  providers: [...providers],
  exports: [...providers],
})
export class SmsModule {}

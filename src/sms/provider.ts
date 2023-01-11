import * as smsc from '../../src/sms/lib/smsc_api';
// idk why, but эта штука работает только при импорте из /src
import { Provider } from '@nestjs/common';
import { ApiConfigService } from '../config/ApiConfigService';
import { SmsProvider } from './types';

export const smsGatewayFactory = (
  path: string,
  token: string | symbol,
): Provider => ({
  provide: token,
  useFactory: (configService: ApiConfigService) => {
    const params = configService.smsConfig(path);

    (smsc as SmsProvider).configure(params);

    return smsc as SmsProvider;
  },
  inject: [ApiConfigService],
});

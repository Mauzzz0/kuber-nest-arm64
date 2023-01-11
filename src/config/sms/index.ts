import { registerAs } from '@nestjs/config';
import { smsConfig } from '../../sms/config';

export default registerAs('sms', () => ({
  base: smsConfig(),
}));

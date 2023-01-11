import { SmsConfigType } from './types';

export const smsConfig = (): SmsConfigType => ({
  login: process.env.SMS_LOGIN,
  password: process.env.SMS_PASSWORD,
});

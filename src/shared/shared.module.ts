import { Module } from '@nestjs/common';
import UserEmailValidator from './user.email.validator';

@Module({
  providers: [UserEmailValidator],
  exports: [UserEmailValidator],
})
export default class SharedModule {}

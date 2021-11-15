import { Global, Module } from '@nestjs/common';
import GlobalService from './global.service';

@Global()
@Module({
  providers: [GlobalService],
  exports: [GlobalService],
})
export default class GlobalModule {}

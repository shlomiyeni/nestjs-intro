import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TaskModule from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import SharedModule from './shared/shared.module';
import GlobalModule from './global/global.module';

@Module({
  imports: [
    TaskModule,
    SharedModule,
    GlobalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

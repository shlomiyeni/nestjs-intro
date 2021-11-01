import { Module } from '@nestjs/common';
import TaskController from './controller/task.controller';
import TaskService from './manager/task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export default class TaskModule {}

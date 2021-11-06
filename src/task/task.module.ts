import { Module } from '@nestjs/common';
import TaskController from './controller/task.controller';
import TaskRepository from './repository/task.repository';
import CreateTaskUsecase from './manager/usecase/create.task.usecase';
import GetTaskUsecase from "./manager/usecase/get.task.usecase";

@Module({
  controllers: [TaskController],
  providers: [CreateTaskUsecase, GetTaskUsecase, TaskRepository],
})
export default class TaskModule {}

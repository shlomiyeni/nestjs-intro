import { Module } from '@nestjs/common';
import TaskController from './controller/task.controller';
import TaskRepository from './repository/task.repository';
import CreateTaskUsecase from './manager/usecase/create.task.usecase';
import GetTaskUsecase from './manager/usecase/get.task.usecase';
import SharedModule from '../shared/shared.module';
import UserEmailValidator from '../shared/user.email.validator';
import GlobalService from '../global/global.service';

@Module({
  controllers: [TaskController],
  providers: [
    CreateTaskUsecase,
    GetTaskUsecase,
    TaskRepository,
    UserEmailValidator,
    GlobalService,
  ],
  imports: [SharedModule],
})
export default class TaskModule {}

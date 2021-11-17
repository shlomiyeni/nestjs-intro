import { Module, Scope } from '@nestjs/common';
import TaskController from './controller/task.controller';
import TaskRepository from './repository/task.repository';
import CreateTaskUsecase from './manager/usecase/create.task.usecase';
import GetTaskUsecase from './manager/usecase/get.task.usecase';
import SharedModule from '../shared/shared.module';
import UserEmailValidator from '../shared/user.email.validator';
import GlobalService from '../global/global.service';
import TestProvider from '../task/manager/test.provider';

@Module({
  controllers: [TaskController],
  providers: [
    CreateTaskUsecase,
    GetTaskUsecase,
    TaskRepository,
    UserEmailValidator,
    GlobalService,
    {
      provide: 'test-provider',
      useClass: TestProvider,
      scope: Scope.TRANSIENT,
    },
  ],
  imports: [SharedModule],
})
export default class TaskModule {}

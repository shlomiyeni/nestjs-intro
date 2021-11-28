import TaskRepository from '../../repository/task.repository';
import Task from '../model/task';
import { Inject, Injectable } from '@nestjs/common';
import UserEmailValidator from '../../../shared/user.email.validator';
import GlobalService from '../../../global/global.service';
import TestProvider from '../test.provider';

@Injectable()
export default class CreateTaskUsecase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly userEmailValidator: UserEmailValidator,
    private readonly globalService: GlobalService,
  ) {}

  async create(task: Task) {
    await this.userEmailValidator.validate(task.assignee);
    await this.globalService.doImportantThings();
    const createdTask = await this.taskRepository.save(task);
    console.log(`a new task was created ${JSON.stringify(createdTask)}`);
    // Info logger goes here
    return createdTask;
  }
}

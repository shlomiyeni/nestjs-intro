import TaskRepository from '../../repository/task.repository';
import Task from '../model/task';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CreateTaskUsecase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(task: Task) {
    // business validation goes here
    const createdTask = await this.taskRepository.save(task);
    console.log(`a new task was created ${JSON.stringify(createdTask)}`);
    // Info logger goes here
    return createdTask;
  }
}

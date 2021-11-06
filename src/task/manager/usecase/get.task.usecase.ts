import { Injectable } from '@nestjs/common';
import TaskRepository from '../../repository/task.repository';

@Injectable()
export default class GetTaskUsecase {
  constructor(private taskRepository: TaskRepository) {}

  async get(id: number) {
    return this.taskRepository.findOne(id);
  }
}

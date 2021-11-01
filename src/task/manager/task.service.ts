import { Injectable } from '@nestjs/common';
import Task from './model/task';

@Injectable()
export default class TaskService {
  async getTasks() {
    return [];
  }

  async createTask(task: Task) {
    return 'create new task';
  }
}

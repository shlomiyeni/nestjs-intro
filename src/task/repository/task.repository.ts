import { Injectable } from '@nestjs/common';
import Task from '../manager/model/task';

const idCounter = (counter) => (task) =>
  Object.assign({}, task, { id: ++counter });

@Injectable()
export default class TaskRepository {
  private tasks: Task[] = [];
  private addId;

  constructor() {
    this.addId = idCounter(0);
  }

  async findOne(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  async find() {
    return;
  }

  async save(task: Task) {
    const taskWithId = this.addId(task);
    this.tasks.push(taskWithId);
    return taskWithId;
  }

  async saveBulk(tasks: Task[]) {
    this.tasks.push(...tasks.map(() => this.addId));
  }
}

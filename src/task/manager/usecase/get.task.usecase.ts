import {Inject, Injectable} from '@nestjs/common'
import TaskRepository from '../../repository/task.repository';
import TestProvider from '../test.provider'
import ITestProvider from '../test.provider.interface'

@Injectable()
export default class GetTaskUsecase {
  @Inject('test-provider')
  private readonly testProvider: ITestProvider;

  constructor(private taskRepository: TaskRepository) {}

  async get(id: number) {
    console.log(
        `while getting task call to test provider name: ${this.testProvider.getName()}`,
    );
    return this.taskRepository.findOne(id);
  }
}

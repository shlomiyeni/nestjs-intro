import { Injectable } from '@nestjs/common';
import ITestProvider from './test.provider.interface';

@Injectable()
export default class TestProvider implements ITestProvider {
  private name: string;

  constructor() {
    this.name = 'test provider name';
  }

  getName() {
    return this.name;
  }
}

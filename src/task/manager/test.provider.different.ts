import { Injectable } from '@nestjs/common';
import ITestProvider from './test.provider.interface';

@Injectable()
export default class TestProviderDifferent implements ITestProvider {
  private name: string;

  constructor() {
    this.name = 'test provider name but with cool style';
  }

  getName() {
    return this.name;
  }
}

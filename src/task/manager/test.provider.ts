import { Injectable } from '@nestjs/common';

@Injectable()
export default class TestProvider {
  private name: string;

  constructor() {
    this.name = 'test provider name';
  }

  getName() {
    return this.name;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export default class GlobalService {
  async doImportantThings(): Promise<void> {
    console.log('doing some very important things');
    return;
  }
}

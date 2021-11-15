import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserEmailValidator {
  async validate(userEmail: string): Promise<boolean> {
    console.log(`validating user email: ${userEmail}`);
    // do some very complicated validation
    return true;
  }
}

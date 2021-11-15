import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export default class PartTimeApiGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const now = new Date().getHours();
    if (now < 9 || 15 < now) {
      console.log('sorry the API is closed');
      return false;
    }
    return true;
  }
}

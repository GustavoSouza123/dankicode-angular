import { Injectable } from '@angular/core';

// a service is just a class, it doesn't require a decorator
// the @Injectable decorator is used to allow services to be injected into other services (only necessary in the service where other services are injected)
@Injectable()
export class LoggingService {
  logStatusChange(userName: string, status: string) {
    console.log(
      'Foi alterado status do usuário ' + userName + ' para ' + status
    );
  }
}

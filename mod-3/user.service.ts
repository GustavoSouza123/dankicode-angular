import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

// a service is just a class, it doesn't require a decorator
// the @Injectable decorator is used to allow services to be injected into other services (only necessary in the service where other services are injected)
@Injectable()
export class UserService {
  users = [
    { name: 'José da Silva', status: 'ativo' },
    { name: 'Maria das Dores', status: 'inativo' },
    { name: 'Francisco Pereira', status: 'férias' },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  createUser(name: string, status: string) {
    this.users.push({ name, status });
    this.loggingService.logStatusChange(name, status);
  }

  updateStatus(id: number, newStatus: string) {
    this.users[id].status = newStatus;
    this.loggingService.logStatusChange(this.users[id].name, newStatus);
  }
}

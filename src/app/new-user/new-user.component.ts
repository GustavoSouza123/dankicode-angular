import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [],
})
export class NewUserComponent {
  // @Output() userCreated = new EventEmitter<{ name: string; status: string }>();

  constructor(private userService: UserService) {
    this.userService.statusUpdated.subscribe((status: string) =>
      alert('Novo status: ' + status)
    );
  }

  onCreateUser(userName: string, userStatus: string) {
    // this.userCreated.emit({
    //   name: userName,
    //   status: userStatus,
    // });

    this.userService.createUser(userName, userStatus);
    // the LoggingService is being injected directly into the UserService
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [],
})
export class UserComponent {
  @Input() user!: { name: string; status: string };
  @Input() id!: number;

  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(private userService: UserService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });

    this.userService.updateStatus(this.id, status);
    // the LoggingService is being injected directly into the UserService

    this.userService.statusUpdated.emit(status);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css',
})
export class SchoolComponent {
  id: number = 10;
  name: string = 'School Name';
  isSchoolOpen: boolean;

  constructor() {
    this.isSchoolOpen = Math.random() > 0.5 ? true : false;
  }

  getStatusColor() {
    return this.isSchoolOpen ? 'success' : 'danger';
  }
}

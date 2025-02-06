import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolComponent } from '../school/school.component';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [CommonModule, FormsModule, SchoolComponent],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css',
})
export class SchoolsComponent implements OnInit {
  allowNewSchool: boolean = false;
  schoolCreated: boolean = false;
  newSchoolStatus: string = 'Nenhuma escola criada';
  newSchoolName: string = 'Escola Teste';
  schools: string[] = ['Escola 1', 'Escola 2'];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewSchool = true;
    }, 1000);
  }

  createSchool() {
    this.schoolCreated = true;
    this.newSchoolStatus = 'Escola criada com o nome: ' + this.newSchoolName;
    this.schools.push(this.newSchoolName);
  }

  updateSchoolName(event: Event) {
    this.newSchoolName = (<HTMLInputElement>event.target).value;
  }
}

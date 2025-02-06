import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchoolsComponent } from "./schools/schools.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchoolsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'dankicode';
}

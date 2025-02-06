import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DangerDirective } from './danger/danger.directive';
import { WarningDirective } from './warning/warning.directive';
import { UnlessDirective } from './unless/unless.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DangerDirective,
    WarningDirective,
    UnlessDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // numbers: number[] = [1, 2, 3, 4, 5];
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4];
  onlyOdd: boolean = false;

  value: number = 10;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier/supplier.component';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [CommonModule, SupplierComponent],
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent {
  suppliers = [
    {
      id: 1,
      name: 'Philco',
    },
    {
      id: 2,
      name: 'Sony',
    },
    {
      id: 3,
      name: 'Gradiente',
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier',
  standalone: true,
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  supplier?: {
    id: number;
    name: string;
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.supplier = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
  }
}

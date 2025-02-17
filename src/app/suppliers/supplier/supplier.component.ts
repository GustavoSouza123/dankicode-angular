import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [RouterLink],
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
    // this.supplier = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };

    this.route.params.subscribe((params: Params) => {
      this.supplier = {
        id: params['id'],
        name: params['name'],
      };
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  loadProducts() {
    this.router.navigate(['/products']);
  }

  loadProduct(id: number) {
    this.router.navigate(['/products', id, 'edit'], {
      queryParams: { allowEditing: '1' },
      fragment: 'loading',
    });
  }
}

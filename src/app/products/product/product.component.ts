import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public product?: { id: number; name: string; status: string };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.product = this.productsService.getProduct(1);
  }
}

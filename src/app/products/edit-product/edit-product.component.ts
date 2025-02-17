import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  product?: { id: number; name: string; status: string };
  productName?: string = '';
  productStatus?: string = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();

    this.product = this.productsService.getProduct(1);
    this.productName = this.product?.name;
    this.productStatus = this.product?.status;
  }

  onUpdateProduct() {
    this.productsService.updateProduct(this.product?.id, {
      name: this.productName as string,
      status: this.productStatus as string,
    });
  }
}

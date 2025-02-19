import { Component, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public product?: IProduct;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // getting route parameter through route snapshot
    // const id = +this.route.snapshot.params['id'];
    // this.product = this.productsService.getProduct(id);
    //
    // this.route.params.subscribe((params: Params) => {
    //   this.product = this.productsService.getProduct(+params['id']);
    // });

    // get product through router guard (resolver) instead of product service
		// useful especially when fetching async data
    this.route.data.subscribe((data: Data) => {
      this.product = data['product'];
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}

import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {
  constructor(private productsService: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<IProduct> {
    return this.productsService.getProduct(+route.params['id']);
  }
}

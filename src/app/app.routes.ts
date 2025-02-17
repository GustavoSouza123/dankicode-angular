import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id/edit', component: EditProductComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'suppliers/:id/:name', component: SupplierComponent },
];

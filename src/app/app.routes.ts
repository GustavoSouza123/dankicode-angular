import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './products/edit-product/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ProductsComponent,
    children: [
      { path: ':id', component: ProductComponent },
      {
        path: ':id/edit',
        canDeactivate: [CanDeactivateGuard],
        component: EditProductComponent,
      },
    ],
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: [{ path: ':id/:name', component: SupplierComponent }],
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Página não encontrada!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

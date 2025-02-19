import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductsService } from './products/products.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './products/edit-product/can-deactivate-guard.service';
import { ProductResolver } from './products/product/product-resolver.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ProductsService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    ProductResolver,
  ],
};

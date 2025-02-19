import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authenticated?: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  loadProducts() {
    this.router.navigate(['/products']);
  }

  loadProduct(id: number) {
    this.router.navigate(['/products', id, 'edit'], {
      queryParams: { allowEditing: '1' },
      fragment: 'loading',
    });
  }

  login(): void {
    this.authService.login();
    this.checkAuth();
  }

  logout(): void {
    this.authService.logout();
    this.checkAuth();
  }

  checkAuth(): void {
    this.authService.isAuthenticated().then((authenticated: boolean) => {
      this.authenticated = authenticated ? 'autenticado' : 'não autenticado';
    });
  }
}

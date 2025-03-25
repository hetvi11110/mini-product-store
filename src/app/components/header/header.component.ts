import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  private authService = inject(AuthService);
  private cartService = inject(CartService);

  get checkAuthStatus() {
    return this.authService.checkAuthStatus();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
  }

  cartLabel = computed(() => `Cart (${this.cartService.cart().length})`);

}

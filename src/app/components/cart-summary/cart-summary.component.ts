import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-cart-summary',
  imports: [CurrencyPipe],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    return this.cartService.cart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  });
}

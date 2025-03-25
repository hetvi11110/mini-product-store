import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  });
}

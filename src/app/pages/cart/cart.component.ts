import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProductComponent } from '../../components/cart-product/cart-product.component';
import { CartSummaryComponent } from '../../components/cart-summary/cart-summary.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent, CartSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartService = inject(CartService);

  cart = computed(() => this.cartService.cart);

}

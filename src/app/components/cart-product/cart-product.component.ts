import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-product',
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {
  items = input.required<Product>();

  cartService = inject(CartService);

  // removeFromCart(id: number) {
  //   console.log("in");
  //   this.cartService.removeFromCart(id);
  // }
}

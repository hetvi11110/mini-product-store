import { Component, inject, input } from '@angular/core';
import {  CartItem } from '../../models/cartItem.model';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-cart-product',
  imports: [CurrencyPipe],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {
  items = input.required<CartItem>();

  cartService = inject(CartService);

}

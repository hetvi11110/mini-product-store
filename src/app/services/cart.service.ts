import { Injectable, Signal, signal } from '@angular/core';
import { Product  } from '../models/product.model';
import {  CartItem } from '../models/cartItem.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<CartItem[]>([]);

  addToCart(product: Product) {
    this.cart.update((currentCart) => {
      const existingItem = currentCart.find((p) => p.id === product.id);

      if (existingItem) {
        return currentCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  }

  removeFromCart(id: number) {
    this.cart.update((currentCart) => {
      return currentCart
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0);
    });
  }

  getTotalQuantity() {
    return this.cart().reduce((sum, item) => sum + item.quantity, 0);
  }

}

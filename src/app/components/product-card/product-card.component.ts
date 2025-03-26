import { Component, inject, input, output } from '@angular/core';
import { CurrencyPipe,  TitleCasePipe } from "@angular/common";
import { ExactWordLimitPipe } from '../../pipes/exact-word-limit.pipe'
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, TitleCasePipe, ExactWordLimitPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  product = input.required<Product>();

  private cartService = inject(CartService);

  addToCart() {
    this.cartService.addToCart(this.product());
  }

}

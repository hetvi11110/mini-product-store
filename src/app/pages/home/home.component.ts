import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component'
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  products = signal<Product[]>([]);
  productService = inject(ProductService);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products.set(res);
    });
  }


}

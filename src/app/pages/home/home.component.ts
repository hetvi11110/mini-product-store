import { Component, inject, signal } from '@angular/core';
import { AddProductComponent } from '../../components/add-product/add-product.component'
import { ProductCardComponent } from '../../components/product-card/product-card.component'
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [AddProductComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  private authService = inject(AuthService);
  products = signal<Product[]>([]);
  productService = inject(ProductService);

  get checkAuthStatus() {
    return this.authService.checkAuthStatus();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products.set(res);
    });
  }

  onProductAdded(newProduct: Product) {
    this.productService.getAllProducts().subscribe((res) => {
      this.products.update(products => [newProduct,...products]);
      // this.products.set(res);
    });
  }

}

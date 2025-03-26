import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component'

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, ProductCardComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<Product>();

  products = signal<Product[]>([]);
  productForm: FormGroup;
  productService = inject(ProductService);

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    this.products.set(JSON.parse(storedProducts));
  } else {
    this.productService.getAllProducts().subscribe((res) => {
      this.products.set(res);
      localStorage.setItem('products', JSON.stringify(res));
    });
  }
  }

  addProduct() {
    if (this.productForm.valid) {
      const productData = { ...this.productForm.value, id: Date.now() };
      const updatedProducts = [productData, ...this.products()];
      this.products.set(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      this.productForm.reset();
    }
  }

  onProductAdded(newProduct: Product) {
    this.productService.getAllProducts().subscribe((res) => {
      this.products.update(products => [newProduct,...products]);
      // this.products.set(res);
    });
  }

}

import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  @Output() productAdded = new EventEmitter<Product>();

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

   productService = inject(ProductService);

  addProduct() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.productService.createProduct(productData).subscribe((newProduct) => {
        this.productAdded.emit(newProduct);
        this.productForm.reset();
      });
    }
  }

}

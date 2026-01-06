import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule, CurrencyPipe]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(category?: string): void {
    this.loading = true;
    this.productService.getProducts(category).subscribe(data => {
      this.products = data;
      this.loading = false;
    });
  }

  addToCart(product: Product): void {
    console.log('Added to cart:', product);
  }
}
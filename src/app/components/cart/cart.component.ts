import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [CurrencyPipe]
})
export class CartComponent {
  cartItems: Product[] = [];

  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  checkout(): void {
    console.log('Checkout:', this.cartItems);
  }
}
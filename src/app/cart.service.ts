import { Injectable } from '@angular/core';
import { Basket } from './models/basket';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Basket[] = [];
  sum: number = 0;

  addToCart(product: Basket) {
    this.items.push(product);
    this.toСountOllSum(this.items)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  toСountOllSum(items: Basket[]) {
    for (const item of items) {
      this.sum = this.sum + item.price;
    }
  }

}

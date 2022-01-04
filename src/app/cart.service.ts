import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Basket } from './models/basket';
import { Phone } from './models/phone';
import { PhoneDetails } from './models/phone-details';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Basket[] = [];
  sum: number = 0;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Phone[]>(`${environment.apiURL}/products.json`)
  }

  getById(phoneId: string) {
    return this.http.get<PhoneDetails>(`${environment.apiURL}/products/${phoneId}.json`)
  }

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

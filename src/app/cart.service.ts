import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket } from './models/basket';
import { Phone } from './models/phone';
import { PhoneDetails } from './models/phone-details';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Basket[] = [];
  sum!: number;
  subject: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Phone[]>(`${environment.apiURL}/products.json`)
  }

  getById(phoneId: string) {
    return this.http.get<PhoneDetails>(`${environment.apiURL}/products/${phoneId}.json`)
  }

  addToCart(product: Basket) {
    this.items.push(product);
    this.toСountOllSum(this.items)
    this.subject.next(this.items.length);
  }

  getItems() {
    return this.items;
  }

  toСountOllSum(items: Basket[]) {
    this.sum = 0;
    for (const item of items) {
      this.sum = this.sum + item.price;
    }
  }

  removeFromBasket(item: Basket) {
    this.items = this.items.filter((i: Basket )=> i.name !== item.name);
    this.toСountOllSum(this.items);
    this.subject.next(this.items.length);
  }
}


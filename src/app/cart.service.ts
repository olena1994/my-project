import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  subject = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${environment.apiURL}/products.json`);
  }

  getById(phoneId: string): Observable<PhoneDetails> {
    return this.http.get<PhoneDetails>(`${environment.apiURL}/products/${phoneId}.json`);
  }

  addToCart(product: Basket): void {
    this.items.push(product);
    this.toСountOllSum(this.items);
    this.subject.next(this.items.length);
  }

  getItems(): Basket[] {
    return this.items;
  }

  toСountOllSum(items: Basket[]): void {
    // reduce
    this.sum = 0;
    for (const item of items) {
      this.sum = this.sum + item.price;
    }
  }

  removeFromBasket(item: Basket): void {
    this.items = this.items.filter((i: Basket) => i.name !== item.name);
    this.toСountOllSum(this.items);
    this.subject.next(this.items.length);
  }
}


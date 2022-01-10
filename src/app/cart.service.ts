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
  sum!: any;
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
    this.toCountAllSum(this.items);
    this.subject.next(this.items.length);
  }

  getItems(): Basket[] {
    return this.items;
  }

  toCountAllSum(items: Basket[]): void {
    this.sum = items.reduce(( prev: number, { price }) => prev + price, 0);
  }

  removeFromBasket(item: Basket): void {
    this.items = this.items.filter((i: Basket) => i.name !== item.name);
    this.toCountAllSum(this.items);
    this.subject.next(this.items.length);
  }
}


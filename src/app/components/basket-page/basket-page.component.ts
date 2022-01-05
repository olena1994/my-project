import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Basket } from '../../models/basket';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent {
  sumOll = this.cartService.sum
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  remove(item: Basket) {
    this.cartService.removeFromBasket(item);
    this.items = this.cartService.getItems();
    this.sumOll = this.cartService.sum
  }
}


import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent {
  sum: any;
  sumOll = this.cartService.sum
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }
}

import { Component } from '@angular/core';
import { Good } from 'src/app/models/good';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-goods-for-home-page',
  templateUrl: './goods-for-home-page.component.html',
  styleUrls: ['./goods-for-home-page.component.scss']
})
export class GoodsForHomePageComponent {
  goods: Good[] = [{
    id: 1,
    url: 'https://content1.rozetka.com.ua/goods/images/big_tile/168687129.jpg',
    name: 'Холодильник',
    description: 'Холодильник LG GA-B509SLSM',
    price: 16499
  }, {
    id: 2,
    url: 'https://content1.rozetka.com.ua/goods/images/big_tile/243687720.jpg',
    name: 'Пральна машина',
    description:'Пральна машина Samsung WW80R42LHFWDUA',
    price: 12999
  }, {
    id: 3,
    url: 'https://content2.rozetka.com.ua/goods/images/big_tile/176567978.jpg',
    name: 'Посудомийна машина',
    description: 'Посудомийна машина BOSCH SMV25EX00E',
    price: 7699
  },{
    id: 4,
    url: 'https://content.rozetka.com.ua/goods/images/big_tile/238350540.jpg',
    name: 'Морозильна камера',
    description:'Морозильна камера Gorenje FN6192CW',
    price: 12159
  }, {
    id: 5,
    url: 'https://content1.rozetka.com.ua/goods/images/big_tile/164646738.jpg',
    name: 'Сушильний автомат',
    description: 'Сушильний автомат SAMSUNG DV90T5240AT/UA',
    price: 21399
  }
  ]

  constructor(
    private cartService: CartService
  ) { }

  addToCart(product: Good) {
    this.cartService.addToCart(product);
    window.alert('Ваш товар додано у корзину!');
  }
}

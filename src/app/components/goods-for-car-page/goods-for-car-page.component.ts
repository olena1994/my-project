import { Component } from '@angular/core';
import { Good } from 'src/app/models/good';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-goods-for-car-page',
  templateUrl: './goods-for-car-page.component.html',
  styleUrls: ['./goods-for-car-page.component.scss']
})
export class GoodsForCarPageComponent {
  goods: Good[] = [{
    id: 1,
    url: 'https://www.avtoradosti.com.ua/pics/prod/ico/148346_332119.jpg',
    name: 'Ароматизатор',
    description: 'Ароматизатор Aroma Car "Supreme Duo" Black 2 шт по 8 мл',
    price: 138
  }, {
    id: 2,
    url: 'https://www.avtoradosti.com.ua/pics/prod/ico/61_268147.jpg',
    name: 'Автопилосос',
    description:'Автопилосос Voin vc-330 миючий/138W/сумка',
    price: 748
  }, {
    id: 3,
    url: 'https://www.avtoradosti.com.ua/pics/prod/ico/129735_262940.jpg',
    name: 'Спрей',
    description: 'Спрей для зчеплення шин з льодом (500 мл)',
    price: 197
  },{
    id: 4,
    url: 'https://www.avtoradosti.com.ua/pics/prod/ico/191360_624560.jpg',
    name: 'Чохол',
    description:'Чохол проти інею для переднього скла "Winter Plus" 85х135см',
    price: 289
  }, {
    id: 5,
    url: 'https://www.avtoradosti.com.ua/pics/prod/ico/140234_301250.jpg',
    name: 'Органайзер',
    description: 'Органайзер трансформер в багажник',
    price: 2250
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

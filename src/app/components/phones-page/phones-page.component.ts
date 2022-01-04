import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Phone } from 'src/app/models/phone';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {
  phones: Phone[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getAll()
      .subscribe(phones => {
        this.phones = phones;
      })
  }

  getImageURL(url: string) {
    return `${environment.imgURL}${url}`
  }

  addToCart(product: Phone) {
    this.cartService.addToCart(product);
    window.alert('Ваш товар додано у корзину!');
  }

}

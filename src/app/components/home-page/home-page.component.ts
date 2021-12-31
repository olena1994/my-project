import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  text: string = `
  Доставляємо щодня з 11:00 - 23:00

  В межах міста здійснюємо безкоштовну доставку при замовленні на суму від 2000 грн, 
  за межами міста - від 3500 грн
  (у віддалені населені пункти доставка обумовлюється окремо)

  Орієнтовний час доставки - від 29 до 59 хв
  `;

  constructor() { }
 
}

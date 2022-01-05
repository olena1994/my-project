import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Онлайн магазин "Твій улюблений"';
  counter!: number;
  subject!: Subject<number>

  constructor(
    private cartService: CartService
  ) { 
    this.cartService.subject.subscribe ({
      next: (count: number) => {
        this.counter = count;
      }
    });
  }
}

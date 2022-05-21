import { Component } from '@angular/core';
import { filter, Subject } from 'rxjs';
import { CartService } from './cart.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter!: number;
  previousUrl?: any;
  currentUrl?: any;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.cartService.subject.subscribe((count: number) => {
      this.counter = count;
    });
  }

  ngOnInit() {
  }
}

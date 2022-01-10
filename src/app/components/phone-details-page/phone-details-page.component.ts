import { ChangeDetectionStrategy, ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { PhoneDetails } from 'src/app/models/phone-details';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { Phone } from 'src/app/models/phone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phone-details-page',
  templateUrl: './phone-details-page.component.html',
  styleUrls: ['./phone-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneDetailsPageComponent implements OnInit {
  phones: Phone[] = [];
  phone!: PhoneDetails;
  priceFromPhones!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private location: Location,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(params => params['phoneId']),
        switchMap(phoneId => this.cartService.getById(phoneId))
      )
      .subscribe(details => {
        this.phone = details;

        this.cartService.getAll().subscribe(phones => {
          this.phones = phones;
          this.priceFromPhones = phones.find(item => item.id === this.phone.id);
          this.phone.price = this.priceFromPhones.price;
        });
        this.cd.markForCheck();
      });
  }

  getImageURL(url: string) {
    return `${environment.imgURL}${url}`;
  }

  addToCart(phone: PhoneDetails) {
    this.cartService.addToCart(phone);
    window.alert('Ваш товар додано у корзину!');
  }

  back(): void {
    this.location.back();
  }
}


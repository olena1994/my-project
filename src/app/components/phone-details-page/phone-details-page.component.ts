import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { PhoneDetails } from 'src/app/models/phone-details';
import { environment } from 'src/environments/environment';
import { map,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-phone-details-page',
  templateUrl: './phone-details-page.component.html',
  styleUrls: ['./phone-details-page.component.scss']
})
export class PhoneDetailsPageComponent implements OnInit {
  phone!: PhoneDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      map(params => params['phoneId']),
      switchMap(phoneId => this.cartService.getById(phoneId))
    )
      .subscribe(details => {
        console.log(details)
        this.phone = details;
      })
  }

  getImageURL(url: string) {
    return `${environment.imgURL}${url}`
  }

}


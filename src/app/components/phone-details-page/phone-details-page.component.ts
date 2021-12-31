import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details-page',
  templateUrl: './phone-details-page.component.html',
  styleUrls: ['./phone-details-page.component.scss']
})
export class PhoneDetailsPageComponent implements OnInit {
  phoneId = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      this.phoneId = params['phoneId'];
    })
  }

}

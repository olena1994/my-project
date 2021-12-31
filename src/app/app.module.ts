import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GoodsForHomePageComponent } from './components/goods-for-home-page/goods-for-home-page.component';
import { GoodsForCarPageComponent } from './components/goods-for-car-page/goods-for-car-page.component';
import { BasketPageComponent } from './components/basket-page/basket-page.component';
import { PhonesPageComponent } from './components/phones-page/phones-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneDetailsPageComponent } from './components/phone-details-page/phone-details-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GoodsForHomePageComponent,
    GoodsForCarPageComponent,
    BasketPageComponent,
    PhonesPageComponent,
    PhoneDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
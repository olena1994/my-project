import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GoodsForHomePageComponent } from './components/goods-for-home-page/goods-for-home-page.component';
import { GoodsForCarPageComponent } from './components/goods-for-car-page/goods-for-car-page.component';
import { BasketPageComponent } from './components/basket-page/basket-page.component';
import { PhonesPageComponent } from './components/phones-page/phones-page.component';
import { PhoneDetailsPageComponent } from './components/phone-details-page/phone-details-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'goods-for-home', component: GoodsForHomePageComponent},
  {path: 'goods-for-car', component: GoodsForCarPageComponent},
  {path: 'basket', component: BasketPageComponent},
  {path: 'phones', component: PhonesPageComponent},
  {path: 'phones/:phoneId', component: PhoneDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

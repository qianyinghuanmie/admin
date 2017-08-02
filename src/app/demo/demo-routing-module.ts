/**
 * Created by fdd on 2017/7/18.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarouselComponent} from './carousel-component';
import {DatepickerComponent} from './datepicker-component';
import {TimepickerComponent} from './timepicker-component';

const dataCenterRoutes: Routes = [
  {path: 'dataCenter', component: CarouselComponent},
  {path: 'dataCenter/0', component: CarouselComponent},
  {path: 'dataCenter/1', component: DatepickerComponent},
  {path: 'dataCenter/2', component: TimepickerComponent},
  {path: 'dataCenter/:id', component: CarouselComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(dataCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {
}

/**
 * Created by fdd on 2017/7/18.
 */
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';   // 引入angular表单
import { CommonModule } from '@angular/common';

import {CarouselComponent} from './carousel-component';   // 轮播图
import {DatepickerComponent} from './datepicker-component';     //  日期组件
import {TimepickerComponent} from './timepicker-component';     //  时间组件

import { DemoRoutingModule } from './demo-routing-module';
@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    CarouselComponent,
    DatepickerComponent,
    TimepickerComponent
  ]
})
export class DemoModule {}

/**
 * Created by fdd on 2017/7/24.
 */
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';   // 引入angular表单
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NoticeComponent} from './notice-component';

import { NoticeRoutingModule } from './notice-routing-module';
@NgModule({
  imports: [
    CommonModule,
    NoticeRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    NoticeComponent
  ]
})
export class NoticeModule {}

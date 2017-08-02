/**
 * Created by fdd on 2017/7/22.
 */
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';   // 引入angular表单
import {CustomerManageComponent} from './customerManage-component';
import {CustomerManageNewComponent} from './customerManageNew-component';

import { CustomerManageRoutingModule } from './customerManage-routing-module';
@NgModule({
  imports: [
    CommonModule,
    CustomerManageRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    CustomerManageComponent,
    CustomerManageNewComponent,
  ]
})
export class  CustomerManageModule {}

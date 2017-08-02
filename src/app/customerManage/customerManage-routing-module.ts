/**
 * Created by fdd on 2017/7/22.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomerManageComponent} from './customerManage-component';
import {CustomerManageNewComponent} from './customerManageNew-component';

const dataCenterRoutes: Routes = [
  {path: 'customerManage', component: CustomerManageComponent},
  {path: 'customerManage/new', component: CustomerManageNewComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(dataCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerManageRoutingModule {
}

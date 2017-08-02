/**
 * Created by fdd on 2017/7/24.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NoticeComponent} from './notice-component';

const dataCenterRoutes: Routes = [
  {path: 'notice', component: NoticeComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(dataCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NoticeRoutingModule {
}

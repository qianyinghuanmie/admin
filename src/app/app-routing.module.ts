
/**
 * Created by fdd on 2017/7/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 子页面
// import {DataCenter} from './dataCenter/dataCenter-component'
// import {Account} from './account/account-component'


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/instruction',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

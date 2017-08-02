/**
 * Created by fdd on 2017/7/24.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VersionUpdateComponent} from './versionUpdate-component';

const dataCenterRoutes: Routes = [
  {path: 'versionUpdate', component: VersionUpdateComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(dataCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VersionUpdateRoutingModule {
}

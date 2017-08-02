/**
 * Created by fdd on 2017/7/21.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ThreePluginComponent} from './threePlugin-component';

const dataCenterRoutes: Routes = [
  {path: 'threePlugin', component: ThreePluginComponent},
  {path: 'threePlugin/0', component: ThreePluginComponent},
  {path: 'threePlugin/1', component: ThreePluginComponent},
  {path: 'threePlugin/2', component: ThreePluginComponent},
  // {path: 'dataCenter/1', component: DataCenterOther},
  // {path: 'dataCenter/:id', component: DataCenterOther}
];
@NgModule({
  imports: [
    RouterModule.forChild(dataCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThreePluginRoutingModule {
}

/**
 * Created by fdd on 2017/7/21.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InstructionComponent} from './instruction-component';

const dataCenterRoutes: Routes = [
  {path: 'instruction', component: InstructionComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(dataCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InstructionRoutingModule {

}

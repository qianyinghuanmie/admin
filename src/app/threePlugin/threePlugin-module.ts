/**
 * Created by fdd on 2017/7/21.
 */
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ThreePluginComponent} from './threePlugin-component';
import { ThreePluginRoutingModule } from './threePlugin-routing-module';
@NgModule({
  imports: [
    CommonModule,
    ThreePluginRoutingModule,
  ],
  declarations: [
    ThreePluginComponent
  ]
})
export class ThreePluginModule {}

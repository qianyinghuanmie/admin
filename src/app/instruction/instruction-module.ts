/**
 * Created by fdd on 2017/7/21.
 */
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {InstructionComponent} from './instruction-component';

import { InstructionRoutingModule } from './instruction-routing-module';
@NgModule({
  imports: [
    CommonModule,
    InstructionRoutingModule
  ],
  declarations: [
    InstructionComponent
  ]
})
export class InstructionModule {}

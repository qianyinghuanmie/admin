/**
 * Created by fdd on 2017/7/24.
 */
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';   // 引入angular表单
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VersionUpdateComponent} from './versionUpdate-component';

import { VersionUpdateRoutingModule } from './versionUpdate-routing-module';
@NgModule({
  imports: [
    CommonModule,
    VersionUpdateRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    VersionUpdateComponent
  ]
})
export class VersionUpdateModule {}

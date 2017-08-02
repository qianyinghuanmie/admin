import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common'; // 用来解决上线后刷新路由定向的问题
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';   // 引入angular表单
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module'; // 路由模块

// 子页面
import {DemoModule} from './demo/demo-module'   //  ng-bootstrap demo
import {InstructionModule} from './instruction/instruction-module'                // 介绍
import {ThreePluginModule} from './threePlugin/threePlugin-module'               //  第三方插件
import {CustomerManageModule} from './customerManage/customerManage-module'               //  客户管理
import {NoticeModule} from './notice/notice-module'               //  消息通知
import {VersionUpdateModule} from './versionUpdate/versionUpdate-module'               //  版本更新

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* 子页面部分*/
    DemoModule,
    InstructionModule,
    ThreePluginModule,
    CustomerManageModule,
    NoticeModule,
    VersionUpdateModule,
    /* 第三方模块部分*/
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

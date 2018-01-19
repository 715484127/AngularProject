import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ToastComponent } from './shared/toast/toast.component';
import { ToastBoxComponent } from './shared/toast/toast-box/toast-box.component';
import { ToastService } from './shared/toast/toast.service';
import { AppService } from './app.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { LoginComponent } from './login/login.component';
import { SpinComponent } from './shared/spin/spin.component';
import { HttpService } from './shared/http/http.service';
import { SpinService } from './shared/spin/spin.service';
import { PageNotFoundComponent } from './error-page/page-not-found.component';


@NgModule({
  // 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道
  declarations: [
    AppComponent,
    ToastComponent,
    ToastBoxComponent,
    SpinComponent,
    PageNotFoundComponent
  ],
  // 本模块声明的组件模板需要的类所在的其它模块
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  // 服务的创建者，并加入到全局服务列表中，可用于应用任何部分
  providers: [
    ToastService,
    AppService,
    SelectivePreloadingStrategy,
    HttpService,
    SpinService
  ],
  // declarations 的子集，可用于其它模块的组件模板
  exports: [
    ToastBoxComponent,
    SpinComponent
  ],
  // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
  bootstrap: [AppComponent]
})
export class AppModule { }

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
  declarations: [
    AppComponent,
    ToastComponent,
    ToastBoxComponent,
    SpinComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    ToastService,
    AppService,
    SelectivePreloadingStrategy,
    HttpService,
    SpinService
  ],
  exports: [
    ToastBoxComponent,
    SpinComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

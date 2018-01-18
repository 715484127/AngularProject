import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, ProductsList, ProductRow, ProductImage, ProductDepartment, PriceDisplay } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsList,
    ProductRow,
    ProductImage,
    ProductDepartment,
    PriceDisplay
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientJsonpModule, HttpClient} from '@angular/common/http';


import { Observable } from 'rxjs';

import $ from 'jquery';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers:[SearchBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
  

 
     
 
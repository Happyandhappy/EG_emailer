import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Http,HttpModule, Headers, RequestOptions } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  	ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

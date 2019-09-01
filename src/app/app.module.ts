import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { IpComponent } from './ip/ip.component';
import { IpService } from './ip/ip.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

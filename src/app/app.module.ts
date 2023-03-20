import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './shop/shop.component';
import { ReserveComponent } from './reserve/reserve.component';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { ContactusModule } from './contactus/contactus.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ReserveComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NavModule,
    BrowserAnimationsModule,
    AboutModule,
    ServicesModule,
    ContactusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

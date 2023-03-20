import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { AboutModule } from '../about/about.module';
import { ServicesModule } from '../services/services.module';
import { ContactusModule } from '../contactus/contactus.module';
import { AppModule } from '../app.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppModule,
  ],
  exports: [],
})
export class HomeModule { }

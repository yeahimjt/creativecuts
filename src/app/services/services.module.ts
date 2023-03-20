import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import {MatExpansionModule} from '@angular/material/expansion'


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
  ],
  exports: [ServicesComponent],
})
export class ServicesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';
import {MatInputModule} from '@angular/material/input'
import {FormControl, FormGroupDirective, NgForm, Validators,ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  exports: [
    ContactusComponent,
  ]
})
export class ContactusModule {

  

 }

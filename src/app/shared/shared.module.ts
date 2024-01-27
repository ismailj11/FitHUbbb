import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    
  ]
  ,exports: [
    
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
  ]
})

export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { IncrementorComponent } from './incrementor/incrementor.component';



@NgModule({
  declarations: [
    IncrementorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementorComponent
  ]
})
export class ComponentsModule { }

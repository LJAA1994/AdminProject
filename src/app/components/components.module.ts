import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Components
import { IncrementorComponent } from './incrementor/incrementor.component';
import { DonutsComponent } from './donuts/donuts.component';



@NgModule({
  declarations: [
    IncrementorComponent,
    DonutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    IncrementorComponent,
    DonutsComponent
  ]
})
export class ComponentsModule { }
